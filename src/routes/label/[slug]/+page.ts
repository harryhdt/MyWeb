import type { PageLoad } from './$types';
import { fetchPosts } from '$lib/helper/fetchPosts';

export const load: PageLoad = async ({ params }) => {
	const posts = await fetchPosts();

	return {
		props: {
			posts,
			label: params.slug
		}
	};
};
