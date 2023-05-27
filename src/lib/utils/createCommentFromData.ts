import type { Comment } from "$lib/types";

export function createCommentFromFormData(formData: FormData, postId: number): Comment {
	return {
		commentId: crypto.randomUUID(),
		postId: postId,
		email: String(formData.get("email")),
		username: String(formData.get("username")),
		body: String(formData.get("comment")),
		likes: 1
	};
}
