<script lang="ts">
	import type { Post } from "$lib/types";
	import { PUBLIC_API_BASE_URL } from "$env/static/public";

	export let post = {} as Post;

	const { title } = post.attributes;
	const { url } = post.attributes.image.data.attributes.formats.small || "";
</script>

<a class="card" href="/{post.id}">
	<div class="image-container">
		<img src={PUBLIC_API_BASE_URL + url || ""} alt="{title} thumbnail" />
	</div>
	<div class="card-text">
		<h2>{title}</h2>
	</div>
</a>

<style>
	.card {
		border: 1px solid var(--color-accent);
		border-radius: 4px;
		aspect-ratio: 1/1;
		max-width: 20rem;
		display: block;
		background-color: var(--color-primary);
		color: var(--color-text);
		line-height: 1.2;

		position: relative;
	}

	.image-container {
		position: absolute;
		width: 100%;
		height: 100%;
		overflow: hidden;

		top: 0;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		filter: blur(8px);
		opacity: 0.5;
		transition: all 0.3s ease-in-out;
	}

	.card:hover img {
		transform: scale(1.1);
		opacity: 0.6;
		filter: blur(0px);
	}

	.card:hover .card-text {
		text-shadow: 2px 2px 10px var(--background-color);
	}

	.card-text {
		display: flex;
		flex-direction: column;
		height: 100%;
		padding: 0.5rem;
		position: relative;
		z-index: 10;

		text-shadow: 2px 2px 10px #00000000;

		transition: all var(--transition-short);
	}

	h2 {
		font-size: clamp(1rem, 3vw, 1.875rem);
	}

	@media (min-width: 48rem) {
		h2 {
			font-size: clamp(1rem, 2vw, 1.875rem);
		}
	}

	@media (min-width: 1440px) {
		.card {
			line-height: 1.5;
		}
	}
</style>
