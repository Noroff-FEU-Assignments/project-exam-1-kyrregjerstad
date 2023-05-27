<script lang="ts">
	import Icon from "@iconify/svelte";
	import Logo from "./Logo.svelte";

	export let menuIsOpen = false;
	export let scrollY = 0;

	let hasScrolled = false;
	$: if (scrollY > 50) {
		hasScrolled = true;
	} else {
		hasScrolled = false;
	}
</script>

<nav class:hasScrolled>
	<div class="nav-content">
		<Logo />
		<ul class="links">
			<li><a href="/about">About</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul>
		<button on:click|stopPropagation={() => (menuIsOpen = true)}>
			<Icon icon="carbon:settings-adjust" height={30} color={"var(--color-text)"} />
		</button>
	</div>
</nav>

<style>
	nav {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--color-primary);
		color: var(--color-text);

		padding-block: 1.5rem;
		padding-inline: 1rem;
		line-height: 1.5;

		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: var(--z-index-fixed);

		transition: padding-block var(--transition-short);
		box-shadow: var(--shadow-none);
	}

	nav.hasScrolled {
		padding-block: 0.5rem;
		box-shadow: var(--shadow-XS);
	}

	.nav-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		max-width: var(--container-6XL);
	}

	.links {
		display: flex;
		gap: 1rem;
	}

	@media (min-width: 768px) {
	}
</style>
