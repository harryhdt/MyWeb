<script lang="ts">
	import { page } from '$app/stores';
	import slugify from '$lib/helper/slugify';
	import type { Post } from '$lib/types';
	import moment from 'moment';

	export let data;

	$: label = $page.url.searchParams.get('label') ?? '';

	const generatePosts = () =>
		data.props.posts.list.reduce((acc: any, post) => {
			const filterLabel =
				label && post.metadata.labels
					? post.metadata.labels.map((x) => slugify(x.name)).indexOf(label) > -1
					: true;
			if (filterLabel) {
				const published = moment(post.metadata.published).format('YYYY-MM-DD');
				const group: any = acc.find((group: any) => group.published === published);
				if (group) {
					group.posts.push(post);
				} else {
					acc.push({
						published,
						posts: [post]
					});
				}
			}
			return acc;
		}, []);

	let posts: {
		published: Date;
		posts: {
			component: any;
			metadata: Post;
		}[];
	}[] = generatePosts();
	$: if (label || !label) {
		posts = generatePosts();
	}
</script>

<div>
	<div class="full mx-auto max-w-[1368px] px-4 py-4 md:px-8">
		<h3 class="mb-4 text-2xl font-semibold">Posts</h3>
		<div class="space-y-4 sm:space-y-3">
			{#each posts as post}
				<div class="flex flex-col items-start gap-1 sm:flex-row sm:gap-2">
					<span class="font-light opacity-50 dark:opacity-40">
						{moment(post.published).format('YYYY-MM-DD')}
					</span>
					<div class="inline-flex flex-col gap-2">
						{#each post.posts as p}
							<a
								class="text-slate-900 underline hover:no-underline dark:text-gray-100"
								href="/{slugify(p.metadata.title)}">{p.metadata.title}</a
							>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
