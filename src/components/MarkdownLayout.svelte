<script lang="ts">
	import hljs from 'highlight.js';
	import '../app.css';
	import 'highlight.js/styles/androidstudio.css';
	import { browser } from '$app/environment';

	if (browser) {
		setTimeout(() => {
			document.querySelectorAll('#content code').forEach((el: any) => hljs.highlightElement(el));
		}, 10);
	}
</script>

<div
	id="content"
	class="prose prose-slate w-full dark:prose-invert md:prose-lg prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg hover:prose-a:no-underline prose-ol:pl-4 prose-ul:pl-4 prose-li:my-0 prose-table:block prose-table:overflow-auto md:max-w-5xl"
>
	<slot />
</div>
