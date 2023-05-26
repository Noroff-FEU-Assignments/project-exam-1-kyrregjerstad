import { fetchManyPosts } from "$lib/client/fetchManyPosts";

export const load = async ({ url }) => {
	const pageSize = Number(url.searchParams.get("pageSize")) || 10;

	return {
		data: fetchManyPosts(pageSize)
	};
};
