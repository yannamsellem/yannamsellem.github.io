<script lang="ts">
	import type { PostItem } from '$lib/types';
	import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';

	interface Props {
		post: PostItem;
	}

	let { post }: Props = $props();
</script>

<article class="post-item">
	<a
		href={post.url}
		target="_blank"
		rel="external noopener noreferrer"
		class="post-link"
		aria-label="{post.title} on {post.platform} (opens in new tab)"
	>
		<div class="post-header">
			<h3 class="post-title">
				<span>{post.title}</span>
				<ArrowUpRight size={14} strokeWidth={1.8} class="arrow-icon" aria-hidden="true" />
			</h3>
		</div>

		<p class="post-desc">
			<span class="platform-badge">{post.platform}</span>
			<span class="separator" aria-hidden="true">—</span>
			<span>{post.description}</span>
		</p>
	</a>
</article>

<style>
	.post-item {
		display: block;
	}

	.post-link {
		display: block;
		padding: 1rem;
		margin: 0 -1rem;
		border-radius: var(--radius-md);
		text-decoration: none;
		color: inherit;
		transition: background-color var(--transition-base);
	}

	.post-link:hover {
		background-color: var(--bg-hover);
	}

	.post-header {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 0.75rem;
	}

	.post-title {
		font-size: 1rem;
		font-weight: 500;
		color: var(--text-primary);
		display: flex;
		align-items: center;
		gap: 0.375rem;
		transition: color var(--transition-base);
	}

	.post-link:hover .post-title {
		color: var(--text-accent);
	}

	:global(.arrow-icon) {
		color: var(--text-muted);
		transition: color var(--transition-base);
		flex-shrink: 0;
	}

	.post-link:hover :global(.arrow-icon) {
		color: var(--text-accent);
	}

	.post-desc {
		font-size: 0.875rem;
		line-height: 1.625;
		color: var(--text-secondary);
		margin-top: 0.375rem;
	}

	.platform-badge {
		font-weight: 500;
		color: var(--text-primary);
	}

	.separator {
		margin: 0 0.25rem;
		color: var(--text-muted);
	}
</style>
