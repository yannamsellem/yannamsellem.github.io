<script lang="ts">
	import Moon from '@lucide/svelte/icons/moon';
	import Sun from '@lucide/svelte/icons/sun';
	import { theme } from '../state/theme.svelte';

	function toggle() {
		theme.current = theme.current === 'light' ? 'dark' : 'light';
	}

	$effect(() => {
		document.documentElement.classList.remove('light', 'dark');
		document.documentElement.classList.add(theme.current);
	});
</script>

<svelte:head>
	<script>
		try {
			const theme = localStorage.getItem('theme');

			document.documentElement.classList.add(
				!theme || theme === 'system'
					? window.matchMedia('(prefers-color-scheme: dark)').matches
						? 'dark'
						: 'light'
					: theme
			);
		} catch {
			// localStorage access disabled
		}
	</script>
</svelte:head>

<button
	type="button"
	onclick={toggle}
	aria-label="Toggle dark/light theme"
	aria-pressed={theme.current === 'dark'}
	class="cursor-pointer rounded p-1 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800/60 dark:hover:text-neutral-100"
>
	{#if theme.current === 'dark'}
		<Sun size={18} strokeWidth={1.8} />
	{:else}
		<Moon size={18} strokeWidth={1.8} />
	{/if}
</button>
