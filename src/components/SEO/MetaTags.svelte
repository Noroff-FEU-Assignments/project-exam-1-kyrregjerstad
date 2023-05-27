<script lang="ts">
	import * as config from "$lib/config";
</script>

<svelte:head>
	<meta property="og:site_name" content={config.title} />
	<meta property="og:locale" content={config.language} />
	<meta property="og:url" content={"https://www.blog.kyrre.dev"} />
	<meta property="og:type" content={"article"} />
	<meta property="og:description" content={config.metaDescription} />
</svelte:head>
