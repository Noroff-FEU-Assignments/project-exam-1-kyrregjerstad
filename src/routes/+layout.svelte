<script lang="ts">
	import "$styles/app.css";
	import Header from "$components/Header.svelte";
	import Footer from "$components/Footer.svelte";
	import ToastWrapper from "$components/ToastWrapper.svelte";
	import Menu from "$components/Menu.svelte";
	import { page } from "$app/stores";
	import MetaTags from "$components/SEO/MetaTags.svelte";

	let menuIsOpen = false;
	let scrollY = 0;
</script>

<svelte:window bind:scrollY />
<MetaTags />

<ToastWrapper />
<Menu bind:menuIsOpen currentPage={$page.url.pathname} />
<div class="layout">
	<Header bind:menuIsOpen {scrollY} pathName={$page.url.pathname} />
	<main>
		<slot />
	</main>
</div>
<Footer />

<style>
	.layout {
		margin-inline: auto;
		padding-inline: var(--padding-S);
		max-inline-size: var(--container-6XL);
		padding-top: 2rem;

		background-color: var(--color-background);
		color: var(--color-text);
		transition: background-color var(--transition-short), color var(--transition-short);
	}

	main {
		padding-block: var(--padding-XXL);
		margin-top: 2rem;
	}

	@media (min-width: 35rem) {
		.layout {
			padding-inline: var(--padding-L);
		}
	}

	@media (min-width: 90rem) {
		.layout {
			padding-inline: 0rem;
		}
	}
</style>
