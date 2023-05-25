<script lang="ts">
	import type { Post } from "$lib/types";
	import { PUBLIC_API_BASE_URL } from "$env/static/public";

	export let post: Post;

	let src = `${PUBLIC_API_BASE_URL}${post.attributes.image.data.attributes.formats.large.url}`;
</script>

<div class="image-and-title-wrapper">
	<h1>{post.attributes.title}</h1>
	<img {src} alt={post.attributes.title} class="header-img" />
</div>

<style>
	.image-and-title-wrapper {
		position: relative;
		overflow: hidden;
		aspect-ratio: 1/1;
		width: calc(var(--font-size-multiplier, 1) * 50%);
		margin: 0 auto;
		line-height: 1.5;
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
		font-size: var(--font-size-6XL, 4rem);
		background-color: var(--color-primary);
		display: inline;
		position: relative;
		z-index: 1;
	}
</style>
