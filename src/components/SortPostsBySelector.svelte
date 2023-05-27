<script lang="ts">
	import type { Page } from "@sveltejs/kit";

	export let sortByLatest = true;
	export let page: Page;
	let selectedValue = "Latest";

	$: sortByLatest =
		page.url.searchParams.get("sortBy") === "asc" || (page.url.searchParams as any).size === 0;
	/*  (page.url.searchParams as any).size is set this way since the size is a custom svelte property and not found by TS by default*/

	function handleClick(value: string) {
		selectedValue = value;
	}
</script>

<div class="sort-by-container">
	Sort by:
	<a href="?sortBy=asc" class:active={sortByLatest} on:click={() => handleClick("Latest")}>Latest</a
	>
	<a href="?sortBy=desc" class:active={!sortByLatest} on:click={() => handleClick("Oldest")}
		>Oldest</a
	>
</div>

<style>
	.sort-by-container {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-block: 1rem;
	}

	a {
		border: solid 1px var(--color-accent);
		background-color: var(--color-background);
		color: var(--color-text);
		padding: 0.2rem 0.5rem;
		border-radius: var(--border-radius-L);
		transition: var(--transition-medium) all;
	}

	a.active {
		background-color: var(--color-text);
		color: var(--color-background);
	}

	a:not(.active):hover {
		filter: brightness(1.2);
	}
</style>
