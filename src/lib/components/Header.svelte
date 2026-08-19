<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import GithubIcon from './GithubIcon.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import TwitterIcon from './TwitterIcon.svelte';

	const pathname = $derived(page.url.pathname);
</script>

<header class="site-header">
	<div class="header-inner">
		<a href={resolve('/')} class="brand" aria-label="Yann Amsellem - Home">
			<img
				src="https://github.com/yannamsellem.png"
				alt=""
				aria-hidden="true"
				class="avatar"
				width="24"
				height="24"
				loading="eager"
				decoding="async"
			/>
			<span class="brand-name">Yann Amsellem</span>
		</a>

		<nav class="main-nav" aria-label="Main navigation">
			<a
				href={resolve('/projects')}
				class="nav-link"
				class:active={pathname === '/projects' || pathname.startsWith('/projects/')}
				aria-current={pathname === '/projects' || pathname.startsWith('/projects/')
					? 'page'
					: undefined}
			>
				Projects
			</a>

			<a
				href={resolve('/posts')}
				class="nav-link"
				class:active={pathname === '/posts' || pathname.startsWith('/posts/')}
				aria-current={pathname === '/posts' || pathname.startsWith('/posts/') ? 'page' : undefined}
			>
				Posts
			</a>

			<div class="actions-group">
				<a
					href="https://github.com/yannamsellem"
					target="_blank"
					rel="external noopener noreferrer"
					aria-label="GitHub Profile (opens in new tab)"
					class="icon-link"
				>
					<GithubIcon size={18} />
				</a>

				<a
					href="https://x.com/yannamsellem"
					target="_blank"
					rel="external noopener noreferrer"
					aria-label="Twitter / X Profile (opens in new tab)"
					class="icon-link"
				>
					<TwitterIcon size={18} />
				</a>

				<ThemeToggle />
			</div>
		</nav>
	</div>
</header>

<style>
	.site-header {
		position: sticky;
		top: 0;
		z-index: 50;
		width: 100%;
		background-color: var(--bg-primary);
	}

	.header-inner {
		max-width: var(--max-width);
		margin: 0 auto;
		padding: 1.5rem;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 0.625rem;
		text-decoration: none;
		color: var(--text-primary);
		transition: opacity var(--transition-base);
	}

	.brand:hover {
		opacity: 0.75;
	}

	.avatar {
		width: 1.5rem;
		height: 1.5rem;
		border-radius: var(--radius-full);
		object-fit: cover;
		box-shadow: 0 0 0 1px var(--ring-avatar);
		flex-shrink: 0;
	}

	.brand-name {
		font-size: 1rem;
		font-weight: 600;
		letter-spacing: -0.025em;
	}

	.main-nav {
		display: flex;
		align-items: center;
		gap: 1rem;
		font-size: 0.875rem;
	}

	@media (min-width: 640px) {
		.main-nav {
			gap: 1.5rem;
		}
	}

	.nav-link {
		color: var(--text-muted);
		text-decoration: none;
		transition: color var(--transition-base);
		padding: 0.25rem 0;
	}

	.nav-link:hover {
		color: var(--text-primary);
	}

	.nav-link.active {
		color: var(--text-primary);
		font-weight: 500;
	}

	.actions-group {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding-left: 0.75rem;
		border-left: 1px solid var(--border-subtle);
	}

	.icon-link {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.25rem;
		border-radius: var(--radius-sm);
		color: var(--text-muted);
		transition:
			color var(--transition-base),
			background-color var(--transition-base);
	}

	.icon-link:hover {
		color: var(--text-primary);
		background-color: var(--bg-hover);
	}
</style>
