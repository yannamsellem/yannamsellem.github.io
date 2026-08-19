<script lang="ts">
	import type { ProjectItem } from '$lib/types';
	import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';
	import TechTag from './TechTag.svelte';

	interface Props {
		project: ProjectItem;
	}

	let { project }: Props = $props();
</script>

<article class="project-item">
	<a
		href={project.url}
		target="_blank"
		rel="external noopener noreferrer"
		class="project-link"
		aria-label="{project.title} (opens in new tab)"
	>
		<div class="project-header">
			<h2 class="project-title">
				{#if project.title.includes('/')}
					<span class="project-org">{project.title.slice(0, project.title.indexOf('/') + 1)}</span
					><span>{project.title.slice(project.title.indexOf('/') + 1)}</span>
				{:else}
					<span>{project.title}</span>
				{/if}
				<ArrowUpRight size={14} strokeWidth={1.8} class="arrow-icon" aria-hidden="true" />
			</h2>
		</div>

		<p class="project-desc">
			{project.description}
		</p>

		<div class="project-tags">
			{#each project.tags as tag (tag)}
				<TechTag label={tag} />
			{/each}
		</div>
	</a>
</article>

<style>
	.project-item {
		display: block;
	}

	.project-link {
		display: block;
		padding: 1rem;
		margin: 0 -1rem;
		border-radius: var(--radius-md);
		text-decoration: none;
		color: inherit;
		transition: background-color var(--transition-base);
	}

	.project-link:hover {
		background-color: var(--bg-hover);
	}

	.project-header {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 1rem;
	}

	.project-title {
		font-size: 1rem;
		font-weight: 500;
		color: var(--text-primary);
		display: flex;
		align-items: center;
		gap: 0.375rem;
		transition: color var(--transition-base);
	}

	.project-org {
		opacity: 0.6;
		font-weight: 400;
	}

	.project-link:hover .project-title {
		color: var(--text-accent);
	}

	:global(.arrow-icon) {
		color: var(--text-muted);
		transition: color var(--transition-base);
		flex-shrink: 0;
	}

	.project-link:hover :global(.arrow-icon) {
		color: var(--text-accent);
	}

	.project-desc {
		font-size: 0.875rem;
		line-height: 1.625;
		color: var(--text-secondary);
		margin-top: 0.375rem;
	}

	.project-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.375rem;
		margin-top: 0.75rem;
	}
</style>
