import { PUBLIC_API_BASE_URL, PUBLIC_API_GET_POSTS } from "$env/static/public";

export const load = async ({ url, fetch }) => {
	const pageSize = Number(url.searchParams.get("pageSize")) || 10;

	console.log(url.searchParams.get("pageSize"));

	const fetchPosts = async () => {
		const URL = `${PUBLIC_API_BASE_URL}/api/posts?&pagination[pageSize]=${pageSize}&populate=*`;
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
			console.warn(error);
			return [];
		}
	};

	return {
		posts: fetchPosts()
	};
};
