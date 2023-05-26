<script lang="ts">
	let pageSize = 10;

	function handleLoadMore() {
		pageSize += 10;
	}
</script>

<a
	href="?pageSize={pageSize}"
	data-sveltekit-noscroll
	on:click={() => handleLoadMore()}
	class="load-more-button">Load More Posts</a
>

<style>
	.load-more-button {
		background-color: var(--color-primary);
		padding: 1rem;
		border-radius: 0.5rem;
		margin: 1rem;
		align-self: center;
	}
</style>
