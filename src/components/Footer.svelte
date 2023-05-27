<script lang="ts">
	import * as config from "$lib/config";
</script>

<footer>
	<p class="footer-text">{config.title} &copy {new Date().getFullYear()}</p>
</footer>

<style>
	footer {
		padding-block: 2rem;
		border-top: 1px solid black;
		background-color: var(--color-primary);
		color: var(--color-text);
		line-height: 1.5;
		width: 100%;
		display: flex;
		justify-content: center;
	}
</style>
