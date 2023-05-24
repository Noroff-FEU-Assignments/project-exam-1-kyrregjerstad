<script lang="ts">
	import CommentInput from "$components/CommentInput.svelte";
	import { flip } from "svelte/animate";
	import { handleAddCommentToast } from "$lib/utils/handleToast";
	import type { CommentFromServer } from "$lib/types.js";
	import { PUBLIC_API_BASE_URL } from "$env/static/public";
	import { parseMarkdown } from "$utils/parseMarkdown";
	import Comment from "$components/Comment.svelte";
	import * as config from "$lib/config";

	export let data;
	export let form;

	$: ({ post, comments } = data);

	$: form?.status && handleAddCommentToast(form.status, form.body);

	//TODO fix comment not being displayed locally after adding it
	$: form?.status && comments.data?.push(form.body.tempComment);

	$: if (comments.data) {
		comments.data.sort((a: CommentFromServer, b: CommentFromServer) => {
			return b.id - a.id;
		});
	}

	let commentCount = 20;
</script>

<svelte:head>
	<title>{config.title} | {post.title}</title>
</svelte:head>

<article class="post">
	<div class="image-and-title-wrapper">
		<h1>{post.title}</h1>
		<img
			src={PUBLIC_API_BASE_URL + post.image.data.attributes.url}
			alt="test 2"
			class="header-img"
		/>
	</div>
	<section class="post-body">
		{@html parseMarkdown(post.body)}
	</section>
</article>
<section class="comment-section">
	<CommentInput />
	{#each comments.data as comment (comment.id)}
		<div animate:flip>
			<Comment {comment} />
		</div>
	{/each}
</section>

<style>
	.image-and-title-wrapper {
		position: relative;
		overflow: hidden;
		aspect-ratio: 1/1;
		width: calc(var(--font-size-multiplier, 1) * 50%);
		margin: 0 auto;
		line-height: 1.5;
	}

	.header-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: 0% 10%;
		position: absolute;
		top: 0;
	}
	h1 {
		font-size: var(--font-size-6XL, 4rem);
		background-color: var(--color-primary);
		display: inline;
		position: relative;
		z-index: 1;
	}

	:global(.post-body) {
		margin: 0 auto;
		max-width: 66ch;
		text-align: justify;
		font-size: var(--font-size-M, 1rem);
	}

	:global(.post-body :is(h1, h2, h3, h4, h5, h6)) {
		font-size: var(--font-size-3XL, 1.875rem);
		margin-block-start: 3rem;
	}

	.comment-section {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		max-width: 48rem;
		margin: 0 auto;
	}
</style>
