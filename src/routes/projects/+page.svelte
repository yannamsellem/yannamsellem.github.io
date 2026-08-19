<script lang="ts">
	import { projects } from '$lib/data/projects';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
</script>

<svelte:head>
	<title>Projects — Yann Amsellem</title>
</svelte:head>

<section class="projects-page" aria-labelledby="projects-title">
	<header class="page-header">
		<h1 id="projects-title" class="page-title">Projects</h1>
		<p class="page-subtitle">Selected open-source tools, platforms, and experiments.</p>
	</header>

	<ul class="project-list" role="list">
		{#each projects as project (project.title)}
			<li>
				<ProjectCard {project} />
			</li>
		{/each}
	</ul>
</section>

<style>
	.projects-page {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.page-header {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.page-title {
		font-size: 1.5rem;
		font-weight: 600;
		letter-spacing: -0.025em;
		color: var(--text-primary);
	}

	@media (min-width: 640px) {
		.page-title {
			font-size: 1.875rem;
		}
	}

	.page-subtitle {
		font-size: 0.875rem;
		color: var(--text-muted);
	}

	.project-list {
		display: flex;
		flex-direction: column;
		gap: 1.75rem;
	}
</style>
