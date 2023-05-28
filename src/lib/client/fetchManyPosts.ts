import { PUBLIC_API_BASE_URL, PUBLIC_API_GET_POSTS } from "$env/static/public";
import type { Post } from "$lib/types";

interface FetchResponse {
	posts: Post[];
	pageCount: number;
}

export const fetchManyPosts = async (
	pageSize = 10,
	sortAsc = true,
	fetch: (input: RequestInfo, init?: RequestInit) => Promise<Response>
): Promise<FetchResponse> => {
	const sort = sortAsc ? "id:asc" : "id:desc";
	const URL = `${PUBLIC_API_BASE_URL}/api/posts?sort=${sort}&pagination[pageSize]=${pageSize}&populate=*`;
	const options = {
		headers: {
			"Content-Type": "application/json",
			Authorization: `bearer ${PUBLIC_API_GET_POSTS}`
		}
	};

	try {
		const res = await fetch(URL, options);
		const data = await res.json();

		return {
			posts: data.data,
			pageCount: data.meta.pagination.pageCount
		};
	} catch (error) {
		console.warn(error);
		return {
			posts: [],
			pageCount: 0
		};
	}
};
