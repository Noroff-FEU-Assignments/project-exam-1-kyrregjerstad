<script lang="ts">
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";
	import { setCSSCustomProperty } from "$lib/utils/styleUtils";
	import {
		colorPresetsStore,
		resetPresetsStore,
		deletePresetFromStore,
		createPresetInStore
	} from "$lib/theme-preset-manager";
	import { clickOutside } from "$lib/event-handlers/clickOutside";
	import RangeSelector from "./RangeSelector.svelte";
	import ColorInput from "$components/ColorInput.svelte";
	import IconButton from "$components/buttons/IconButton.svelte";
	import InputModal from "$components/modals/InputModal.svelte";

	import type { IColorPreset } from "$lib/types";
	export let menuIsOpen = false;

	let hasLoaded = false;
	let isModalOpen = false;
	let newPresetName = "";
	let selectedPreset: IColorPreset = $colorPresetsStore[0];

	onMount(() => {
		hasLoaded = true;
		selectedPreset = $colorPresetsStore[0];
	});

	function handlePresetChange(event: Event): void {
		const target = event.target as HTMLSelectElement;
		const selectedName = target.value;
		selectedPreset = $colorPresetsStore.find(
			(preset) => preset.name === selectedName
		) as IColorPreset;
	}

	function openModal() {
		isModalOpen = true;
	}

	function closeModal() {
		isModalOpen = false;
	}

	function closeMenu() {
		menuIsOpen = false;
	}

	function openMenu() {
		menuIsOpen = true;
	}

	function handleModalSubmit(name: CustomEvent<string>) {
		newPresetName = name.detail;
		createPresetInStore(newPresetName, selectedPreset);
		selectedPreset = $colorPresetsStore.slice(-1)[0];
	}

	function handleReset() {
		resetPresetsStore();
		selectedPreset = $colorPresetsStore[0];
	}

	$: selectedPreset && setCSSCustomProperty(selectedPreset, hasLoaded);
</script>

<svelte:body
	on:keydown={($event) => ($event.key === "Escape" ? (closeMenu(), closeModal()) : null)}
/>

<InputModal
	bind:inputModalIsOpen={isModalOpen}
	title="Enter a name for the new preset"
	on:close={closeModal}
	on:submit={handleModalSubmit}
/>

{#if menuIsOpen}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<aside
		class="menu-wrapper"
		use:clickOutside={{ enabled: menuIsOpen }}
		on:clickOutside={closeMenu}
		transition:fly={{ x: 300 }}
	>
		<IconButton
			icon="material-symbols:close"
			iconHeight={35}
			btnClass="close-menu-btn"
			on:click={() => (menuIsOpen = false)}
		/>
		<h3>Colors</h3>
		<ColorInput label="Primary Color" bind:value={selectedPreset.primaryColor} />
		<ColorInput label="Background Color" bind:value={selectedPreset.backgroundColor} />
		<ColorInput label="Accent Color" bind:value={selectedPreset.accentColor} />
		<ColorInput label="Text Color" bind:value={selectedPreset.textColor} />
		<h3>Text</h3>
		<RangeSelector label={"Text Size"} bind:value={selectedPreset.textMultiplier} />
		<RangeSelector label={"Line Height"} bind:value={selectedPreset.lineHeight} min={1} max={2} />
		<div class="preset-selector-group">
			<select name="presets" id="presets" class="preset-select" on:change={handlePresetChange}>
				Color Presets
				{#each $colorPresetsStore as preset}
					<option value={preset.name} selected={preset.name === selectedPreset.name}>
						{preset.name}
					</option>
				{/each}
			</select>
			<div>
				{#if selectedPreset.createdByUser}
					<IconButton
						icon="material-symbols:delete"
						on:click={() => deletePresetFromStore(selectedPreset.name)}
						on:click={() => (selectedPreset = $colorPresetsStore[0])}
					/>
				{/if}
			</div>
		</div>
		<div class="buttons">
			<IconButton icon="carbon:save" label="Save" on:click={openModal} />
			<IconButton icon="carbon:reset" label="Reset" on:click={handleReset} />
		</div>
	</aside>
{/if}

<style>
	.menu-wrapper {
		position: fixed;
		top: 1rem;
		right: 1rem;
		padding: 1rem;
		background-color: white;
		color: black;
		z-index: var(--z-index-dropdown);
		box-shadow: var(--shadow-L);
		line-height: 1.5;
		border-radius: var(--border-radius-L);
	}

	h3 {
		font-size: 1.5rem;
		margin-block: 2rem 0;
	}

	.preset-selector-group {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
	}

	.preset-select {
		font-size: 1rem;
		width: 100%;
		display: flex;
		margin-block: 1rem;
		flex: 1;
	}

	.buttons {
		display: flex;
		justify-content: space-between;
		gap: 0.5rem;
	}
</style>
