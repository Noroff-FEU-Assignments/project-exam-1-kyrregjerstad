<script lang="ts">
	import IconButton from "$components/buttons/IconButton.svelte";
	import { createEventDispatcher } from "svelte";
	import { scale, fade } from "svelte/transition";
	import { addToast } from "$lib/stores/notifications";
	const dispatch = createEventDispatcher();

	export let inputModalIsOpen = false;
	export let title = "";
	export let content = "";

	let inputValue = "";
	let inputField: HTMLInputElement;

	function close() {
		dispatch("close");
		inputValue = "";
	}

	function submit() {
		if (inputValue.length < 1) {
			addToast({
				type: "error",
				title: "That's too short!",
				message: "Please enter a name for the preset.",
				timeout: 3000,
				dismissible: true
			});
			inputField.focus();
			return;
		} else if (inputValue.length > 20) {
			addToast({
				type: "error",
				title: "That's too long!",
				message: "Please enter a name shorter than 20 characters.",
				timeout: 3000,
				dismissible: true
			});
			inputField.focus();
			return;
		} else {
			dispatch("submit", inputValue);
			inputValue = "";
			close();
		}
	}
</script>

{#if inputModalIsOpen}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="modal-overlay" on:click|stopPropagation={close} transition:fade>
		<div class="modal" on:click|stopPropagation transition:scale>
			<h3>{title}</h3>
			<p>{content}</p>
			<!-- svelte-ignore a11y-autofocus -->
			<form>
				<input
					id="modal-input"
					type="text"
					autofocus
					bind:value={inputValue}
					bind:this={inputField}
				/>
				<div class="buttons">
					<IconButton icon="material-symbols:save" label="Save" iconHeight={25} on:click={submit} />
					<IconButton
						icon="material-symbols:cancel"
						label="Cancel"
						iconHeight={25}
						on:click={close}
					/>
				</div>
			</form>
		</div>
	</div>
{/if}

<style>
	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.7);
		backdrop-filter: blur(4px);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: var(--z-index-modal-backdrop);
	}

	.modal {
		background: white;
		padding: 1em;
		border-radius: 8px;
		width: 300px;
		box-sizing: border-box;
		position: relative;
		z-index: var(--z-index-modal);
	}

	input {
		width: 100%;
		border: 1px solid var(--color-accent);
		border-radius: 4px;
		padding: 0.5rem;
		margin: 0.5rem 0;
	}

	.buttons {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
	}
</style>
