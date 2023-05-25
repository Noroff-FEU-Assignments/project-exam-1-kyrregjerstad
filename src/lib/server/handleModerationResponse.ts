import { addCommentToPost } from "$lib/server";
import type { Comment, ModerationResponse } from "$lib/types";

export function handleModerationResponse(moderation: ModerationResponse, comment: Comment) {
	if (moderation.rating < 3) {
		return {
			status: 400,
			body: {
				message: moderation.message,
				rating: moderation.rating
			}
		};
	} else if (moderation.rating < 6) {
		addCommentToPost(comment);
		return {
			status: 201,
			body: {
				message: moderation.message,
				rating: moderation.rating
			}
		};
	} else {
		addCommentToPost(comment);
		return {
			status: 200,
			body: {
				message: moderation.message,
				rating: moderation.rating
			}
		};
	}
}
