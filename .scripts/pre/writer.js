import path from 'path';
import { mkdirSync, promises } from 'fs';
import slugify from './slugify.js';

export const writePosts = async (list) => {
	const dir = path.resolve('./src/data/posts');

	const files = await promises.readdir(dir);
	await Promise.all(
		files.map((file) => {
			const f = path.resolve(dir, file);
			return promises.unlink(f);
		})
	);

	await Promise.all(
		list.map(({ title, body }) => {
			const p = path.resolve(dir, `${slugify(title)}.md`);
			return promises.writeFile(p, body);
		})
	);
};

export const writePages = async (list) => {
	const dir = path.resolve('./src/data/pages');

	const files = await promises.readdir(dir);
	await Promise.all(
		files.map((file) => {
			const f = path.resolve(dir, file);
			return promises.unlink(f);
		})
	);

	await Promise.all(
		list.map(({ title, body }) => {
			const p = path.resolve(dir, `${slugify(title)}.md`);
			return promises.writeFile(p, body);
		})
	);
};

export const writeEnv = async (config) => {
	const content = Object.entries(config)
		.map(([key, value]) => `VITE_${key}=${value}`)
		.join('\n');
	return promises.writeFile('./.env.local', content);
};
