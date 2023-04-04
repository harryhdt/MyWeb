import type { PageLoad } from './$types';
import { fetchPosts } from '$lib/helper/fetchPosts';

export const load: PageLoad = async () => {
	const posts = await fetchPosts();

	return {
		props: {
			posts
		}
	};
};
