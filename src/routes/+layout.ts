import type { LayoutLoad } from './$types';
import { fetchPages } from '$lib/helper/fetchPage';
import slugify from '$lib/helper/slugify';

export const load: LayoutLoad = async () => {
	const pages = await fetchPages();

	return {
		props: {
			pages: pages.map((page) => ({
				title: page.metadata.title,
				link: slugify(page.metadata.title)
			}))
		}
	};
};

export const prerender = true;
export const trailingSlash = 'always';
