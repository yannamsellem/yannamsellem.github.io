<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import GithubIcon from './GithubIcon.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import TwitterIcon from './TwitterIcon.svelte';

	const pathname = $derived(page.url.pathname);
</script>

<header class="flex items-center justify-between py-8">
	<a
		href={resolve('/')}
		class="flex items-center gap-2.5 text-base font-semibold tracking-tight text-neutral-900 transition-opacity hover:opacity-75 dark:text-neutral-100"
	>
		<img
			src="https://github.com/yannamsellem.png"
			alt="Yann Amsellem"
			class="h-6 w-6 rounded-full object-cover ring-1 ring-neutral-200 dark:ring-neutral-800"
			width="24"
			height="24"
			loading="eager"
			decoding="async"
		/>
		<span>Yann Amsellem</span>
	</a>

	<nav class="flex items-center gap-4 text-sm sm:gap-6">
		<a
			href={resolve('/projects')}
			class="transition-colors {pathname === '/projects' || pathname.startsWith('/projects/')
				? 'font-medium text-neutral-900 dark:text-neutral-100'
				: 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100'}"
		>
			Projects
		</a>

		<a
			href={resolve('/posts')}
			class="transition-colors {pathname === '/posts' || pathname.startsWith('/posts/')
				? 'font-medium text-neutral-900 dark:text-neutral-100'
				: 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100'}"
		>
			Posts
		</a>

		<div
			class="flex items-center gap-3 border-l border-neutral-200 pl-2 sm:pl-3 dark:border-neutral-800"
		>
			<a
				href="https://github.com/yannamsellem"
				target="_blank"
				rel="external noopener noreferrer"
				aria-label="GitHub Profile"
				class="rounded p-1 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800/60 dark:hover:text-neutral-100"
			>
				<GithubIcon size={18} />
			</a>

			<a
				href="https://x.com/yannamsellem"
				target="_blank"
				rel="external noopener noreferrer"
				aria-label="Twitter / X Profile"
				class="rounded p-1 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800/60 dark:hover:text-neutral-100"
			>
				<TwitterIcon size={18} />
			</a>

			<ThemeToggle />
		</div>
	</nav>
</header>
