import fetch from 'node-fetch';
import { GITHUB_TOKEN, REPOSITORY } from './index.js';

const fetchData = async (query) => {
	const res = await fetch('https://api.github.com/graphql', {
		method: 'POST',
		headers: {
			Authorization: `bearer ${GITHUB_TOKEN}`
		},
		body: JSON.stringify({ query })
	});

	const json = await res.json();

	if (json.errors) {
		throw new Error(JSON.stringify(json.errors, null, 2));
	}
	return json.data;
};

export const fetchUser = async () => {
	console.log('fetching... user');
	const user = await fetchData(`{
		viewer {
			login
			url
			bio
		}
	}`);
	console.log('user: ' + user.viewer.login);
	return user.viewer;
};

export const fetchDiscussions = async (owner, after) => {
	console.log(`fetching discussions... endCursor: ${after}`);
	const data = await fetchData(`{
		repository(owner: "${owner}", name: "${REPOSITORY}") {
			discussions(first: 100, ${
				after ? `after: "${after}",` : ''
			} orderBy: {field: CREATED_AT, direction: DESC}) {
			pageInfo {
				hasNextPage
				endCursor
			}
			nodes {
				number
				title
				createdAt
				publishedAt
				lastEditedAt
				url
				body
				category {
					name
				}
				labels(first: 100) {
				nodes {
					name
					color
				}
				}
			}
			}
		}
		}`);
	return data.repository.discussions;
};

export const fetchAllDiscussions = async (user) => {
	let endCursor;
	let list = [];
	// eslint-disable-next-line no-constant-condition
	while (true) {
		const { nodes, pageInfo } = await fetchDiscussions(user, endCursor);
		list = list.concat(nodes);
		if (!pageInfo.hasNextPage) break;
		endCursor = pageInfo.endCursor;
	}

	console.log(`fetched ${list.length} discussions`);
	return list;
};
