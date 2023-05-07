<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { navigating } from '$app/stores';
	import { fade } from 'svelte/transition';
	import LoadingSpin from './LoadingSpin.svelte';

	let showLoading = false;
	let timeoutId: any;

	navigating.subscribe((isNavigating) => {
		if (isNavigating) {
			// show loading message after 250ms
			timeoutId = setTimeout(() => {
				showLoading = true;
			}, 250);
		}
	});

	// clear timeout if navigation is complete
	afterNavigate(() => {
		clearTimeout(timeoutId);
		showLoading = false;
	});
</script>

{#if $navigating && showLoading}
	<div
		transition:fade={{ duration: 100 }}
		class="fixed inset-0 z-[9999] flex items-center justify-center bg-white bg-opacity-30 p-4 backdrop-blur-sm dark:bg-gray-900 dark:bg-opacity-30"
	>
		<LoadingSpin show={true} class="sm:h-7 sm:w-7" />
	</div>
{/if}
