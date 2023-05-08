<script lang="ts">
	import { BLOG_NAME, GITHUB_URL } from '../const';
	import Icon from '@iconify/svelte';
	import { themeMode, toggleThemeMode } from '../stores/app';

	export let pages: { title: string; link: string }[] = [];
</script>

<header class="">
	<div class="mx-auto flex h-16 w-full max-w-[1368px] items-center justify-between px-4 md:px-8">
		<a href="/">
			<h1 class="text-xl font-semibold">{BLOG_NAME}</h1>
		</a>
		<div class="flex items-center gap-8">
			<button
				on:click={toggleThemeMode}
				class="rounded-full p-1 transition-colors duration-200 hover:bg-slate-100 active:scale-90 dark:hover:bg-gray-700"
			>
				{#if $themeMode === 'light'}
					<Icon icon="line-md:sun-rising-twotone-loop" class="h-6 w-6" />
				{:else}
					<Icon icon="line-md:moon-rising-twotone-alt-loop" class="h-6 w-6" />
				{/if}
			</button>
			<a
				href={GITHUB_URL}
				class="rounded-full p-1 transition-colors duration-200 hover:bg-slate-100 active:scale-90 dark:hover:bg-gray-700"
				target="_blank"
			>
				<Icon icon="line-md:github-twotone" class="h-6 w-6" />
			</a>
		</div>
	</div>
</header>
<div class="border-b border-slate-200 bg-slate-100 dark:border-gray-700 dark:bg-slate-800">
	{#if pages.length}
		<div class="mx-auto flex w-full max-w-[1368px] items-center gap-4 px-4 py-4 md:px-8">
			{#each pages as page}
				<a
					class="text-slate-900 underline hover:no-underline dark:text-gray-100"
					href="/pages/{page.link}">{page.title}</a
				>
			{/each}
			<a
				target="_blank"
				href="https://analytics.harryhdt.dev/share/fit1cjkVFVb3uhU9/Harry%20Hidayat"
				class="text-slate-900 underline hover:no-underline dark:text-gray-100">Analytics</a
			>
		</div>
	{/if}
</div>
