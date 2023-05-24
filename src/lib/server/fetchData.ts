import { SECRET_API_KEY } from "$env/static/private";
import { PUBLIC_API_BASE_URL } from "$env/static/public";

export async function fetchPost(slug: string) {
	const URL = `${PUBLIC_API_BASE_URL}/api/posts/${slug}?populate=*`;
	const options = {
		headers: {
			"Content-Type": "application/json",
			Authorization: `bearer ${SECRET_API_KEY}`
		}
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
