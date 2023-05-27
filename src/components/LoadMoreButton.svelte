<script lang="ts">
	import Icon from "@iconify/svelte";
	import type { Page } from "@sveltejs/kit";

	let pageSize = 10;

	export let loading = false;
	export let page: Page;

	$: href = page.url.search
		? `${page.url.href}&pageSize=${(pageSize += 10)}`
		: `${page.url.href}?&pageSize=${(pageSize += 10)}`;

	function handleLoadMore() {
		loading = true;
	}
</script>

{#if !loading}
	<a {href} data-sveltekit-noscroll on:click={() => handleLoadMore()} class="load-more-button"
		>Load More Posts
	</a>
{:else}
	<div class="load-more-button">
		<Icon icon="line-md:loading-twotone-loop" width="35" />
	</div>
{/if}

<style>
	.load-more-button {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		background-color: var(--color-primary);
		padding: 1rem;
		border-radius: 0.5rem;
		margin: 1rem;
		align-self: center;

		width: 10rem;

		transition: filter var(--transition-short);

		&:hover {
			filter: brightness(1.3);
		}
	}
</style>
