<script lang="ts">
	import type { Post } from "$lib/types";
	import { PUBLIC_API_BASE_URL } from "$env/static/public";
	import { blur } from "svelte/transition";

	export let post: Post;

	let src = `${PUBLIC_API_BASE_URL}${post.attributes.image.data.attributes.formats.large.url}`;

	let showModal = false;
</script>

<svelte:window
	on:keydown={(e) => {
		if (e.key === "Escape") {
			showModal = false;
		}
	}}
/>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="image-and-title-wrapper" on:click={() => (showModal = true)}>
	<h1>{post.attributes.title}</h1>
	<img {src} alt={post.attributes.title} class="header-img" />
</div>

<!-- svelte-ignore a11y-click-events-have-key-events -->
{#if showModal}
	<div
		class="modal"
		on:click={() => {
			showModal = false;
		}}
		transition:blur
	>
		<img {src} alt={post.attributes.title} class="modal-img" />
	</div>
{/if}

<style>
	.image-and-title-wrapper {
		position: relative;
		overflow: hidden;
		aspect-ratio: 1/1;
		width: calc(var(--font-size-multiplier, 1) * 50%);
		margin: 0 auto;
		line-height: 1.5;

		cursor: pointer;
	}

	.header-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: 0% 10%;
		position: absolute;
		top: 0;
	}

	h1 {
		font-size: var(--font-size-1XL);
		background-color: var(--color-primary);
		display: inline;
		position: relative;
		z-index: 1;
	}

	.modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgba(0, 0, 0, 0.8);
		backdrop-filter: blur(5px);
		z-index: 100;

		cursor: pointer;
	}

	.modal-img {
		max-width: 80vw;
		max-height: 80vh;
		object-fit: cover;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: var(--font-size-2XL, 4rem);
		}
	}

	@media (min-width: 761px) {
		h1 {
			font-size: var(--font-size-4XL, 4rem);
		}
	}

	@media (min-width: 1024px) {
		h1 {
			font-size: var(--font-size-6XL, 4rem);
		}
	}
</style>
