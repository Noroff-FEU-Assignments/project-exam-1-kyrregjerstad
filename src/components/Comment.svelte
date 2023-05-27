<script lang="ts">
	import { enhance } from "$app/forms";
	import type { CommentFromServer } from "$lib/types";
	import { createEventDispatcher } from "svelte";
	import { formatDate } from "$utils/formatDate";

	const dispatch = createEventDispatcher();

	export let comment: CommentFromServer;

	async function handleLike(event: Event) {
		return {
			action: "like",
			id: comment.id
		};
	}
</script>

<div class="comment">
	<h4 class="username">{comment.attributes.username}</h4>
	<h5 class="date">{formatDate(comment.attributes.createdAt)}</h5>
	<p class="comment-body">
		{comment.attributes.body}
	</p>
	<div class="likes-wrapper">
		<div class="comment-likes">
			{comment.attributes.likes}
		</div>
		<div>
			<form action="?/handleLike" method="post" on:submit={handleLike} use:enhance>
				<input type="hidden" name="id" value={comment.attributes.commentId} />
				<button type="submit">❤️</button>
			</form>
		</div>
	</div>
</div>

<style>
	.comment {
		padding: var(--padding-S);
		margin-block: var(--margin-S);
		background-color: var(--color-primary);

		border-radius: var(--border-radius-L);
	}

	.username {
		font-size: 1.5rem;
	}

	.date {
		font-size: var(--font-size-S);
		color: var(--color-text-secondary);
	}

	.comment-body {
		font-size: 1.2rem;
		margin-block: 1rem;
		color: var(--color-text);
	}

	.likes-wrapper {
		display: flex;
		gap: 0.5rem;
	}

	button {
		width: 1.5rem;
	}
</style>
