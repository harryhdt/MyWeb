<script lang="ts">
	// @ts-ignore
	import Giscus from '@giscus/svelte';
	import { COMMENT, REPOSITORY, USER_NAME } from '../const';
	import { themeMode } from '../stores/app';

	export let config: { number: number; comment?: boolean };
</script>

{#if config.comment ?? COMMENT}
	<div class="h-16" />
	<Giscus
		repo={`${USER_NAME}/${REPOSITORY}`}
		mapping="number"
		term={`${config.number}`}
		reactionsEnabled="1"
		emitMetadata="0"
		inputPosition="top"
		theme={$themeMode}
		lang="en"
		loading="lazy"
		crossorigin="anonymous"
	/>
{/if}

<style>
	:global(giscus-widget) {
		max-width: 640px;
		display: block;
	}
</style>
