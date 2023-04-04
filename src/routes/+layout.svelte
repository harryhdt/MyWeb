<script lang="ts">
	import { browser } from '$app/environment';
	import '../app.css';
	import Header from '../partitions/Header.svelte';
	import { themeMode } from '../stores/app';

	export let data;

	if (browser) {
		$themeMode = localStorage.theme ?? 'light';
	}
</script>

<div
	id="app-harryhdt"
	class="min-h-screen bg-white font-base text-slate-800 dark:bg-gray-900 dark:text-gray-200"
>
	<Header pages={data.props.pages} />
	<slot />
</div>
