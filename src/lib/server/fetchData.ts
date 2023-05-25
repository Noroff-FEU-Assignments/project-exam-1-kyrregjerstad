import { PUBLIC_API_GET_POSTS } from "$env/static/private";
import { PUBLIC_API_BASE_URL } from "$env/static/public";
import type { Post } from "$lib/types";

export async function fetchPost(slug: string): Promise<Post | null> {
	const URL = `${PUBLIC_API_BASE_URL}/api/posts/${slug}?populate=*`;
	const options = {
		headers: {
			"Content-Type": "application/json",
			Authorization: `bearer ${PUBLIC_API_GET_POSTS}`
		}
	};

	try {
		const res = await fetch(URL, options);
		const data = await res.json();
		return data.data;
	} catch (error) {
		console.log(error);
		return null;
	}
}
