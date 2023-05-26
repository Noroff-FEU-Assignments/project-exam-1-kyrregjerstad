import { fetchManyPosts } from "$lib/client/fetchManyPosts";

export const load = async ({ url, fetch }) => {
	const pageSize = Number(url.searchParams.get("pageSize")) || 10;
	const sort = url.searchParams.get("sortBy") || "asc";

	const ascending = sort === "asc" ? true : false;

	return {
		data: fetchManyPosts(pageSize, ascending, fetch)
	};
};
