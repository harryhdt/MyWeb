<script lang="ts">
	import slugify from '$lib/helper/slugify';
	import type { Post } from '$lib/types';
	import type { SvelteComponent } from 'svelte';
	import Giscus from '../../components/Giscus.svelte';

	// import '../../code.css';

	export let data;
	let component = data.props.component as unknown as ConstructorOfATypedSvelteComponent;
	let metadata = data.props.metadata as Post;
	let labels = data.props.metadata.labels as any[] | undefined;
</script>

<div>
	<div class="full mx-auto max-w-[1368px] px-4 py-4 md:px-8">
		<h1 class="mb-2 text-3xl font-semibold">{metadata.title}</h1>
		<span class="text-sm text-slate-600 dark:text-gray-500"
			>{new Date(metadata.published).toLocaleString()}</span
		>
		{#if labels && labels.length}
			<div class="mt-2">
				<span> Labels: </span>
				{#each labels as label}
					<a
						href="/?label={slugify(label.name)}"
						class="font-semibold"
						style="background-color: #{label.color}22;color: #{label.color}"
					>
						#{label.name}
					</a>
				{/each}
			</div>
		{/if}
		<div class="mt-4">
			<svelte:component this={component} />
		</div>
		<Giscus config={metadata} />
	</div>
</div>
