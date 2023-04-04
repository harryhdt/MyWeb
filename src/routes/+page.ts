import type { PageLoad } from './$types';
import { fetchPosts } from '$lib/helper/fetchPosts';

export const load: PageLoad = async ({ url }) => {
	const posts = await fetchPosts();

	return {
		props: {
			posts,
			params: url.searchParams
		}
	};
};
