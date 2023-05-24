<script lang="ts">
	import { flip } from "svelte/animate";
	import type { Posts } from "$lib/types";
	import CarouselPost from "./CarouselPost.svelte";
	import { fly, fade } from "svelte/transition";
	import { crossfade } from "svelte/transition";
	import { quintOut } from "svelte/easing";
	import Icon from "@iconify/svelte";

	export let posts: Posts = [];
	export let maxPosts = 4;

	const [send, receive] = crossfade({
		duration: (d) => Math.sqrt(d * 200),

		fallback(node, { delay = 0 }) {
			const style = getComputedStyle(node);
			const transform = style.transform === "none" ? "" : style.transform;

			return {
				duration: 1000,
				easing: quintOut,
				delay: delay * 150, // staggered delay based on index
				css: (t) => `
        opacity: ${t};
        transform: ${transform} scale(${t});
      `
			};
		}
	});

	let startIndex = 0;

	// create timeout function on next and prev to ensure that the animation is complete before changing the index

	let isTransitioning = false;

	function next() {
		if (isTransitioning) return;
		isTransitioning = true;
		if (startIndex + maxPosts < posts.length) {
			startIndex += 4;
		} else {
			startIndex = 0;
		}
		setTimeout(() => {
			isTransitioning = false;
		}, 900);
	}

	function prev() {
		if (isTransitioning) return;
		isTransitioning = true;

		if (startIndex > 0) {
			startIndex -= 4;
		} else {
			startIndex = Math.max(posts.length - maxPosts, 0);
		}
		setTimeout(() => {
			isTransitioning = false;
		}, 900);
	}

	$: visiblePosts = posts.slice(startIndex, startIndex + maxPosts);
</script>

<div class="container">
	{#each visiblePosts as post, i (post.id)}
		<div
			in:receive|local={{ key: post.id, delay: i }}
			out:send|local={{ key: post.id }}
			animate:flip={{ duration: 1000 }}
		>
			<CarouselPost {post} />
		</div>
	{/each}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<button on:click|stopPropagation={prev} class="button">
		<Icon icon="material-symbols:arrow-circle-left-outline-rounded" width="50" />
	</button>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<button on:click|stopPropagation={next} class="button next">
		<Icon icon="material-symbols:arrow-circle-left-outline-rounded" width="50" hFlip />
	</button>
</div>

<style>
	.container {
		position: relative;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
		padding: 1rem;
		width: 100%;
	}

	.button {
		position: absolute;
		background-color: transparent;
		border: none;
		outline: none;
		color: var(--color-accent);
		left: -1rem;
		top: 50%;
		transform: translateY(-50%);
		cursor: pointer;
		transition: all 0.2s ease-in-out;
	}

	.button.next {
		left: unset;
		right: 0rem;
	}

	.button:hover {
		transform: translateY(-50%) scale(1.1);
	}

	@media (min-width: 768px) {
		.container {
			grid-template-columns: repeat(4, 1fr);
		}
	}
</style>
