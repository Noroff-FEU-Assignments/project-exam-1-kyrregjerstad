<script lang="ts">
	import * as config from "$lib/config";
</script>

<svelte:head>
	<meta property="og:site_name" content={config.title} />
	<meta property="og:locale" content={config.language} />
	<meta property="og:url" content={"https://www.blog.kyrre.dev"} />
	<meta property="og:type" content={"article"} />
	<meta property="og:description" content={config.metaDescription} />
	<meta name="description" content={config.metaDescription} />
	<link rel="canonical" href="https://www.blog.kyrre.dev" />
	<meta property="og:title" content={config.title} />
	<meta property="og:image" content={config.image} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@your-twitter-handle" />
	<meta name="twitter:title" content={config.title} />
	<meta name="twitter:description" content={config.metaDescription} />
	<meta name="twitter:image" content={config.image} />
</svelte:head>
