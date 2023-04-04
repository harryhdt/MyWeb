<script lang="ts">
	import type { Page } from '$lib/types';

	// import '../../code.css';

	export let data;
	let component = data.props.component as unknown as ConstructorOfATypedSvelteComponent;
	let metadata = data.props.metadata as Page;
</script>

<div>
	<div class="full mx-auto max-w-[1368px] px-4 py-4 md:px-8">
		<h1 class="mb-2 text-3xl font-semibold">{metadata.title}</h1>
		<svelte:component this={component} />
	</div>
</div>
