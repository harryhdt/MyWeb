const configCategoryName = 'Config';
const postCategoryName = 'Post';
const pageCategoryName = 'Page';

export const findConfig = (list) => {
	const configText = list.find(
		(e) => e.category.name === configCategoryName && e.title === 'index'
	)?.body;

	if (!configText) return {};

	return dotenv.parse(configText);
};

export const filterPage = (list) => {
	const pages = list.filter((e) => e.category.name === pageCategoryName);
	console.log(`filtered pages: ${pages.length}`);
	return pages;
};

export const filterPost = (list) => {
	const posts = list.filter((e) => e.category.name === postCategoryName);
	console.log(`filtered posts: ${posts.length}`);
	return posts;
};
