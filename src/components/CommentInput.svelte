<script lang="ts">
	import { enhance } from "$app/forms";
	import { createEventDispatcher } from "svelte";
	import type { CommentWithTimestamps, CommentFromServer } from "$lib/types";

	const dispatch = createEventDispatcher();

	async function addCommentOptimistically(event: Event) {
		const form = event.target as HTMLFormElement;

		const comment: CommentWithTimestamps = {
			username: (form.elements.namedItem("username") as HTMLInputElement).value,
			email: (form.elements.namedItem("email") as HTMLInputElement).value,
			body: form.comment.value,
			commentId: Date.now().toString(),
			postId: 0,
			likes: 1,
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString(),
			publishedAt: new Date().toISOString()
		};

		const commentWrapper: CommentFromServer = {
			id: Date.now(),
			attributes: comment
		};

		dispatch("commentAddedOptimistically", commentWrapper);
	}
</script>

<form
	method="post"
	action="?/addComment"
	on:submit|preventDefault={addCommentOptimistically}
	use:enhance
>
	<div class="small-fields">
		<div class="block-field">
			<label for="email">Your Email* <span class="weak">(private)</span></label>
			<input type="email" name="email" id="email" required />
		</div>
		<div class="block-field">
			<label for="username">Name* <span class="weak">(public)</span></label>
			<input type="text" name="username" id="username" required />
		</div>
	</div>
	<label for="comment">Write a comment</label>
	<textarea
		name="comment"
		id="comment"
		cols="30"
		rows="10"
		required
		placeholder="Your comment will be subjected to moderation."
	/>
	<button class="button" type="submit">Comment</button>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		line-height: 1.5;

		margin-top: 2rem;
	}

	label {
		font-weight: bold;
	}

	textarea {
		padding: 0.5rem;
	}

	.button {
		margin-top: 1rem;
		align-self: center;
		background-color: var(--color-accent);
		color: var(--color-text);
		padding: 1rem 2rem;
		border-radius: var(--border-radius-XL);
	}

	.weak {
		color: grey;
		font-size: 0.9rem;
	}

	.small-fields {
		display: flex;
		justify-content: center;
		gap: 1rem;
	}

	.block-field {
		flex: 1;
	}
	.block-field * {
		display: block;
		width: 100%;
	}

	@media (max-width: 600px) {
		.small-fields {
			width: 100%;
			flex-direction: column;
		}
	}
</style>
