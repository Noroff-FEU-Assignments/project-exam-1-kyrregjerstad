<script lang="ts">
	import type { Post } from "$lib/types";
	import { PUBLIC_API_BASE_URL } from "$env/static/public";

	export let post = {} as Post;

	const { id } = post;
	const { title, body, date } = post.attributes;
	const { url } = post?.attributes?.image?.data?.attributes?.formats?.medium || "";

	// console.log(post.attributes.image.data.attributes);
</script>

<a class="card" href="/{post.id}">
	<div class="image-container">
		<img src={PUBLIC_API_BASE_URL + url || ""} alt="thumbnail" />
	</div>
	<div class="card-text">
		<h2>#{id} {title}</h2>
		<h4>{date}</h4>
		<p class="body-text">{body}</p>
	</div>
	<p class="hover-indicator">Click to view</p>
</a>

<style>
	.card {
		display: flex;
		flex-direction: column;

		position: relative;
		width: 100%;
		max-height: 250px;

		background-color: var(--color-primary);
		color: var(--color-text);

		border: 1px solid var(--color-accent);
		border-radius: 4px;
		line-height: 1.2;

		overflow: hidden;
		line-height: 1.5;

		transition: all var(--transition-short);
	}

	.card:hover {
		max-height: 300px;
	}

	.hover-indicator {
		position: absolute;
		z-index: 2000;
		bottom: 1rem;
		left: 50%;
		transform: translate(-50%, 300%) scale(0.8);
		opacity: 0;
		transition: all var(--transition-short) 0.2s;
		font-weight: bold;
	}

	.card:hover .hover-indicator {
		opacity: 1;
		transform: translate(-50%, 0%) scale(1);
	}

	.card:before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1000;
		background: linear-gradient(rgba(0, 0, 0, 0) 30%, var(--color-primary) 90%);
	}

	.image-container {
		position: absolute;
		width: 50%;
		height: 100%;
		overflow: hidden;

		top: 0;
		right: -10%;
	}

	.image-container::after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(-90deg, rgba(0, 0, 0, 0) 30%, var(--color-primary) 90%);
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		filter: blur(8px);
		opacity: 0.5;
		transition: all 0.3s ease-in-out;
	}

	.card:hover img {
		transform: scale(1.1);
		opacity: 0.6;
		filter: blur(0px);
	}

	.card:hover .card-text {
		text-shadow: 2px 2px 10px var(--background-color);
	}

	.card-text {
		display: flex;
		flex-direction: column;
		height: 100%;
		padding: 0.5rem;
		position: relative;
		z-index: 10;

		text-shadow: 2px 2px 10px #00000000;

		transition: all var(--transition-short);
	}

	.body-text {
		text-align: justify;
	}

	h4 {
		font-size: 1rem;
	}

	@media (max-width: 30rem) {
		h2 {
			font-size: 1.2rem;
		}
	}

	@media (min-width: 70rem) {
		h2 {
			font-size: 2.5rem;
		}
	}
</style>
