import {
	getCommentsForPost,
	handleLike,
	fetchPost,
	moderateComment,
	handleModerationResponse
} from "$lib/server";
import { createCommentFromFormData } from "$utils/createCommentFromData";

export async function load({ params }) {
	const { slug } = params;

	return {
		post: fetchPost(slug),
		comments: getCommentsForPost(slug)
	};
}

export const actions = {
	addComment: async ({ request, params }) => {
		const { slug } = params;

		const formData = await request.formData();
		const comment = createCommentFromFormData(formData, +slug);

		// const moderation = await moderateComment(comment);
		const moderation = {
			message: "Comment added",
			rating: 10
		};

		return handleModerationResponse(moderation, comment);
	},
	handleLike: async ({ request }) => {
		const formData = await request.formData();
		const id = String(formData.get("id"));
		handleLike(id);
	}
};
