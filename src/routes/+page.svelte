<script lang="ts">
	import Carousel from "$components/Carousel.svelte";
	import PostPreview from "$components/PostPreview.svelte";
	import type { Posts } from "$lib/types";
	import * as config from "$lib/config";
	import Hero from "$components/Hero.svelte";

	export let data;

	$: ({ posts } = data);

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
</section>

<style>
	ul {
		display: flex;
		flex-direction: column;
		gap: var(--margin-M);
	}
</style>
