// import { PUBLIC_API_GET_POSTS } from "$env/static/public";
// import { PUBLIC_API_BASE_URL } from "$env/static/public";

// export const load = async () => {
// 	const fetchPosts = async () => {
// 		const URL = `${PUBLIC_API_BASE_URL}/api/posts?pagination[page]=1&pagination[pageSize]=10&populate=*`;
// 		const options = {
// 			headers: {
// 				"Content-Type": "application/json",
// 				Authorization: `bearer ${PUBLIC_API_GET_POSTS}`
// 			}
// 		};

// 		try {
// 			const res = await fetch(URL, options);
// 			const data = await res.json();

// 			return data.data;
// 		} catch (error) {
// 			console.warn(error);
// 			return [];
// 		}
// 	};

// 	return {
// 		posts: fetchPosts()
// 	};
// };
