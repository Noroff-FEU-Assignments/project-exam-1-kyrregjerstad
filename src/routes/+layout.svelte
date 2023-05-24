<script lang="ts">
	import Hotjar from "@hotjar/browser";
	import "$styles/app.css";
	import Header from "$components/Header.svelte";
	import Footer from "$components/Footer.svelte";
	import { addToast } from "$lib/stores/notifications";
	import ToastWrapper from "$components/ToastWrapper.svelte";
	import Menu from "$components/Menu.svelte";
	import { PUBLIC_HOTJAR_SITE_ID, PUBLIC_HOTJAR_VERSION } from "$env/static/public";
	import { onMount } from "svelte";
	import { page } from "$app/stores";

	export let data;
	let menuIsOpen = false;
	let scrollY = 0;
	$: ({ posts } = data);

	const siteId = parseInt(PUBLIC_HOTJAR_SITE_ID, 10);
	const hotjarVersion = parseInt(PUBLIC_HOTJAR_VERSION, 10);

	onMount(() => {
		Hotjar.init(siteId, hotjarVersion, {
			debug: true
		});
	});

	$: $page, Hotjar.stateChange($page.url.href);
</script>

<svelte:window bind:scrollY />

<ToastWrapper />
<Menu bind:menuIsOpen />
<div class="layout">
	<Header bind:menuIsOpen {scrollY} />
	<main>
		<slot />
	</main>
</div>
<Footer />

<style>
	.layout {
		margin-inline: auto;
		padding-inline: var(--padding-L);
		max-inline-size: var(--container-6XL);

		background-color: var(--color-background);
		color: var(--color-text);
		transition: background-color var(--transition-short), color var(--transition-short);
	}

	main {
		padding-block: var(--padding-XXL);
		margin-top: 2rem;
	}

	@media (min-width: 90rem) {
		.layout {
			padding-inline: 0rem;
		}
	}
</style>
