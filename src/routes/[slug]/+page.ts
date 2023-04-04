import type { PageLoad } from './$types';
import { fetchPost } from '$lib/helper/fetchPosts';

export const load: PageLoad = async ({ params }) => {
	const post = await fetchPost(params.slug);
	if (!post) {
		console.log('POST NOT FOUND');
		throw new Error('Post not found');
	}

	const metadata = post.metadata;

	return {
		props: {
			...post,
			labels: metadata.labels?.map(({ name }) => name)
		}
	};
};
