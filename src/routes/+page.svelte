<script lang="ts">
	import * as config from "$lib/config";
	import LoadMoreButton from "$components/LoadMoreButton.svelte";
	import Carousel from "$components/Carousel.svelte";
	import PostPreview from "$components/PostPreview.svelte";
	import type { Posts } from "$lib/types";
	import Hero from "$components/Hero.svelte";
	import { page } from "$app/stores";
	import SortPostsBySelector from "$components/SortPostsBySelector.svelte";

	export let data;

	let isLoading = false;
	$: $page, (isLoading = false);

	$: ({ posts, pageCount } = data.data);

	$: totalItems = posts.length;
	let sortByLatest = true;

	const sortPosts = (posts: Posts) => {
		if (sortByLatest) {
			return [...posts].sort((a, b) => (a.id > b.id ? 1 : -1));
		} else {
			return [...posts].sort((a, b) => (a.id < b.id ? 1 : -1));
		}
	};

	// $: sortByLatest, (sortedPosts = sortPosts(posts));
	$: sortedPosts = sortPosts(posts);
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<Hero />
	{#if posts}
		<Carousel {posts} />
		<SortPostsBySelector bind:sortByLatest page={$page} />
		<ul class="posts">
			{#each posts as post}
				<li>
					<PostPreview {post} />
				</li>
			{/each}
		</ul>
		{#if totalItems < pageCount * 10}
			<LoadMoreButton loading={isLoading} page={$page} />
		{/if}
	{:else}
		<p>There was an error getting posts from the server</p>
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
</style>
