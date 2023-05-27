<!-- Button.svelte -->
<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import Icon from "@iconify/svelte";

	export let label = "";
	export let icon = "";
	export let btnClass = "default-btn";
	export let iconHeight = 15;

	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch("click");
	}
</script>

<button on:click|stopPropagation={handleClick} class={btnClass}>
	<Icon {icon} height={iconHeight} />
	{label}
</button>

<style>
	/* Default styles here */

	.default-btn {
		background-color: black;
		color: white;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0.5rem;
		gap: 0.5rem;
		border-radius: var(--border-radius-M);
	}

	.close-menu-btn {
		position: absolute;
		top: 0.5rem;
		right: 0.5rem;
		color: black;
	}
</style>
