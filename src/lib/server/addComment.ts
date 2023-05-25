import { SECRET_API_ADD_COMMENT_KEY } from "$env/static/private";
import { PUBLIC_API_BASE_URL } from "$env/static/public";
import type { Comment } from "$lib/types";

export async function addCommentToPost(comment: Comment) {
	const URL = `${PUBLIC_API_BASE_URL}/api/comments`;

	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `bearer ${SECRET_API_ADD_COMMENT_KEY}`
		},
		body: JSON.stringify({
			data: {
				commentId: comment.commentId,
				postId: comment.postId,
				email: comment.email,
				username: comment.username,
				body: comment.body,
				likes: comment.likes
			}
		})
	};

	try {
		const res = await fetch(URL, options);
		const data = await res.json();
		return data.data.attributes;
	} catch (error) {
		console.log(error);
		return null;
	}
}
