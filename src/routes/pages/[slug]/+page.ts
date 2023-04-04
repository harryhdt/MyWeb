import type { PageLoad } from './$types';
import { fetchPage } from '$lib/helper/fetchPage';

export const load: PageLoad = async ({ params }) => {
	const page = await fetchPage(params.slug);
	if (!page) {
		console.log('PAGE NOT FOUND');
		throw new Error('Page not found');
	}

	return {
		props: page
	};
};
