import {
	getCommentsForPost,
	handleLike,
	fetchPost,
	moderateComment,
	handleModerationResponse
} from "$lib/server";
import { createCommentFromFormData } from "$utils/createCommentFromData";
import { SECRET_ENABLE_COMMENT_MODERATION } from "$env/static/private";

console.log(SECRET_ENABLE_COMMENT_MODERATION);

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

		const isModerationEnabled = SECRET_ENABLE_COMMENT_MODERATION === "true";

		let moderation;
		if (isModerationEnabled) {
			moderation = await moderateComment(comment);
		} else {
			moderation = {
				message: "Comment moderation is disabled.",
				rating: 10
			};
		}

		return handleModerationResponse(moderation, comment);
	},
	handleLike: async ({ request }) => {
		const formData = await request.formData();
		const id = String(formData.get("id"));
		handleLike(id);
	}
};
