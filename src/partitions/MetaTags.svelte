<script lang="ts">
	export let title = 'Harry Hidayat';
	export let description = title;
	export let thumbnail = '';
</script>

<svelte:head>
	<title>{title}</title>
	{#if description}
		<meta name="description" content={description} />
	{/if}

	<!-- Google / Search Engine Tags -->
	<meta itemprop="name" content={title} />
	{#if description}
		<meta itemprop="description" content={description} />
	{/if}
	<meta itemprop="image" content={thumbnail ? thumbnail : '/favicon.png'} />

	<!-- Facebook Meta Tags -->
	<meta property="og:title" content={title} />
	{#if description}
		<meta property="og:description" content={description} />
	{/if}
	<meta property="og:image" content={thumbnail ? thumbnail : '/favicon.png'} />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	{#if description}
		<meta name="twitter:description" content={description} />
	{/if}
	<meta name="twitter:image" content={thumbnail ? thumbnail : '/favicon.png'} />
</svelte:head>
