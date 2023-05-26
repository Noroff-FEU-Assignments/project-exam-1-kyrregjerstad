<script lang="ts">
	import LoadMoreButton from "../components/LoadMoreButton.svelte";

	import Carousel from "$components/Carousel.svelte";
	import PostPreview from "$components/PostPreview.svelte";
	import type { Posts } from "$lib/types";
	import * as config from "$lib/config";
	import Hero from "$components/Hero.svelte";

	export let data;

	$: ({ posts, pageCount } = data.data);

	$: totalItems = posts.length;

	const sortPosts = (posts: Posts) => [...posts].sort((a, b) => (a.id > b.id ? 1 : -1));

	$: sortedPosts = sortPosts(posts);
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<Hero />
	<Carousel posts={sortedPosts} />
	<ul class="posts">
		{#each sortedPosts as post}
			<li>
				<PostPreview {post} />
			</li>
		{/each}
	</ul>
	{#if totalItems < pageCount * 10}
		<LoadMoreButton />
	{/if}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
	}
	ul {
		display: flex;
		flex-direction: column;
		gap: var(--margin-M);
	}

	.load-more-button {
		background-color: var(--color-primary);
		padding: 1rem;
		border-radius: 0.5rem;
		margin: 1rem;
		align-self: center;
	}
</style>
