<script>
	import * as config from "$lib/config";
</script>

<div class="hero-wrapper gradient-background">
	<h1>{config.title}</h1>
	<h2>{config.description}</h2>
</div>

<style>
	.hero-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		width: 100%;
		height: 30vh;
	}

	h1 {
		font-size: clamp(2rem, 15vw, 10rem);
		line-height: 1;
	}

	.gradient-background {
		background: -webkit-linear-gradient(45deg, var(--color-accent), var(--color-text));
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
