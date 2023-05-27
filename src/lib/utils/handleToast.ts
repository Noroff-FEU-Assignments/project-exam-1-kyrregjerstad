import { addToast } from "$lib/stores/notifications";
import type { ModerationResponse } from "$lib/types";

export function handleAddCommentToast(status: number, body: ModerationResponse) {
	if (status === 200) {
		addToast({
			title: "Comment added!",
			message: `ChatGPT says: "${body.message}" and gave it the score ${body.rating} of out 10 🎉`,
			type: "success",
			timeout: 6000
		});
	} else if (status === 201) {
		addToast({
			title: "Comment added, but flagged",
			message: `ChatGPT says: "${body.message}" and gave it the score ${body.rating} of out 10`,
			type: "warning",
			timeout: 6000
		});
	} else if (status === 400) {
		addToast({
			title: "Comment failed to add",
			message: body.message,
			type: "error",
			timeout: 8000
		});
	}
}
