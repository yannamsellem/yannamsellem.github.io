<script lang="ts">
	import Moon from '@lucide/svelte/icons/moon';
	import Sun from '@lucide/svelte/icons/sun';
	import { theme } from '../state/theme.svelte';

	function toggle() {
		theme.current = theme.current === 'light' ? 'dark' : 'light';
	}

	function switch_theme() {
		document.documentElement.classList.remove('light', 'dark');
		document.documentElement.classList.add(theme.current);
	}

	$effect(() => {
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		theme.current;
		if (!document.startViewTransition) switch_theme();
		else document.startViewTransition(switch_theme);
	});
</script>

<button
	type="button"
	onclick={toggle}
	aria-label="Toggle dark and light theme"
	aria-pressed={theme.current === 'dark'}
	class="theme-toggle"
>
	{#if theme.current === 'dark'}
		<Sun size={18} strokeWidth={1.8} />
	{:else}
		<Moon size={18} strokeWidth={1.8} />
	{/if}
</button>

<style>
	.theme-toggle {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.25rem;
		border-radius: var(--radius-sm);
		color: var(--text-muted);
		transition:
			color var(--transition-base),
			background-color var(--transition-base);
		cursor: pointer;
	}

	.theme-toggle:hover {
		color: var(--text-primary);
		background-color: var(--bg-hover);
	}
</style>
