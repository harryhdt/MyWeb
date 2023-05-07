<script lang="ts">
	import slugify from '$lib/helper/slugify';
	import type { Post } from '$lib/types';
	import moment from 'moment';
	import Giscus from '../../components/Giscus.svelte';

	// import '../../code.css';

	export let data;
	let component = data.props.component as unknown as ConstructorOfATypedSvelteComponent;
	let metadata = data.props.metadata as Post;
	let labels = data.props.metadata.labels as any[] | undefined;
</script>

<div>
	<div class="full mx-auto max-w-[1368px] px-4 py-4 md:px-8">
		<h1 class="mb-2 text-2xl font-semibold !leading-relaxed md:text-3xl">{metadata.title}</h1>
		<div class="mb-6">
			<span class="text-sm text-slate-500 dark:text-gray-600 md:text-base">
				Last update {moment(metadata.updated ?? metadata.published).fromNow()}
			</span>
			{#if labels && labels.length}
				<div class="mt-2">
					<span class="text-slate-500 dark:text-gray-600"> Labels: </span>
					{#each labels as label}
						<a
							href="/label/{slugify(label.name)}"
							class="px-1 py-px transition-opacity hover:opacity-70"
							style="background-color: #{label.color}11;color: #{label.color};"
						>
							#{label.name}
						</a>
					{/each}
				</div>
			{/if}
		</div>
		<svelte:component this={component} />
		<br /><br />
		<Giscus config={metadata} />
	</div>
</div>
