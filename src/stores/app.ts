import { writable } from 'svelte/store';

export const themeMode = writable<'light' | 'dark'>('light');

export const toggleThemeMode = () => {
	themeMode.update((tm) => {
		const theme = tm === 'dark' ? 'light' : 'dark';
		localStorage.theme = theme;
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
		return theme;
	});
};
