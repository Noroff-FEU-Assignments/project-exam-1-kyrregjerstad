import { PUBLIC_API_BASE_URL } from "$env/static/public";

export async function getCommentsForPost(postId: number | string) {
	const URL = `${PUBLIC_API_BASE_URL}/api/comments?filters[postId][$eq]=${postId}`;

	const options = {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
	};

	try {
		const res = await fetch(URL, options);
		const data = await res.json();
		console.log(data);
		return data;
	} catch (error) {
		console.log(error);
		return [];
	}
}
