import { SECRET_OPENAI_API_KEY } from "$env/static/private";
import { PUBLIC_OPENAI_API_BASE_URL } from "$env/static/public";
import type { Comment } from "$lib/types";
import { stringToObj } from "$utils/stringToObj";

export async function moderateComment(comment: Comment) {
	const URL = `${PUBLIC_OPENAI_API_BASE_URL}/v1/chat/completions`;

	const systemMessage = `
	You are responsible for moderating content in a comment section. 
	You will make sure that both the username and the comment are appropriate for the website.
	You will be provided with the username and comment from the user, and will ONLY reply with a JavaScript object, 
	where you will rate the username and comment on a scale from 0 - 10, where 0 is the worst and 10 is the best. 
	You will then fill in the message value with the reason you rated the content the way you did and formulate the comment as you are talking to the commenter.
	
	If the comment does not need moderation, you will give it rating: 10 and message: "No moderation needed".

	You will not respond with any other text.
	
	The returning object should look like this:
	
	{ rating: 5, message: "Your message here" }
	`;
	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${SECRET_OPENAI_API_KEY}`
		},
		body: JSON.stringify({
			model: "gpt-3.5-turbo",
			messages: [
				{
					role: "system",
					content: `${systemMessage}`
				},
				{
					role: "user",
					content: `username: ${comment.username} content: ${comment.body}`
				}
			]
		})
	};

	try {
		const res = await fetch(URL, options);
		const data = await res.json();

		const message = data.choices[0].message.content;

		const moderationObj = stringToObj(message);

		console.log(moderationObj);

		return moderationObj;
	} catch (error) {
		console.log(error);
		return null;
	}
}
