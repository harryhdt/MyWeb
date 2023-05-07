<script lang="ts">
	import type { Page } from '$lib/types';
	import moment from 'moment';
	import MetaTags from '../../../partitions/MetaTags.svelte';

	// import '../../code.css';

	export let data;
	$: component = data.props.component as unknown as ConstructorOfATypedSvelteComponent;
	$: metadata = data.props.metadata as Page;
</script>

<MetaTags title="{metadata.title} - Harry Hidayat" description={metadata.excerpt} />
<div>
	<div class="full mx-auto max-w-[1368px] px-4 py-4 md:px-8">
		<h1 class="mb-2 text-2xl font-semibold !leading-relaxed md:text-3xl">{metadata.title}</h1>
		<div class="mb-6 text-sm text-slate-500 dark:text-gray-600 md:text-base">
			Last update {moment(metadata.updated ?? metadata.published).fromNow()}
		</div>
		<svelte:component this={component} />
		<br /><br />
	</div>
</div>
