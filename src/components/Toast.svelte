<script>
	import { createEventDispatcher } from "svelte";
	import { fade } from "svelte/transition";

	const dispatch = createEventDispatcher();

	export let type = "error";
	export let dismissible = true;
</script>

<section class={type} role="alert" transition:fade>
	{#if dismissible}
		<button class="close" on:click={() => dispatch("dismiss")}>X</button>
	{/if}
	<h2 class="title">
		<slot name="title">Toast Title</slot>
	</h2>
	<div class="body">
		<slot name="body" />
	</div>
</section>

<style>
	section {
		position: fixed;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		border-radius: 0.2rem;
		margin: 0 auto 0.5rem auto;
		padding: 0.75rem 1.5rem 1rem 1.5rem;
		width: 20rem;

		z-index: var(--z-index-toast);

		color: white;
		text-align: center;

		top: 2rem;
		left: 0;
		right: 0;
	}

	.error {
		background: IndianRed;
	}
	.success {
		background: MediumSeaGreen;
	}
	.info {
		background: SkyBlue;
	}
	.body {
		margin-left: 1rem;
	}

	button {
		color: white;
		background: transparent;
		border: 0 none;
		padding: 0;
		margin: 0 0 0 auto;
		line-height: 1;
		font-size: 1rem;
	}
</style>
