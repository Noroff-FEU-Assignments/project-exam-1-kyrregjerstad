<script lang="ts">
	import Icon from "@iconify/svelte";
	let pageSize = 10;

	export let loading = false;

	$: console.log(loading);

	function handleLoadMore() {
		loading = true;
	}
</script>

{#if !loading}
	<a
		href="?pageSize={(pageSize += 10)}"
		data-sveltekit-noscroll
		on:click={() => handleLoadMore()}
		class="load-more-button"
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
	}
</style>
