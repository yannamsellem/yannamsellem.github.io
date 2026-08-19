<script lang="ts">
	import { projects } from '$lib/data/projects';
	import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';
</script>

<svelte:head>
	<title>Projects — Yann Amsellem</title>
</svelte:head>

<section class="space-y-8">
	<div>
		<h1
			class="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-100"
		>
			Projects
		</h1>
		<p class="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
			Selected open-source tools, platforms, and experiments.
		</p>
	</div>

	<div class="space-y-7">
		{#each projects as project (project.title)}
			<a
				href={project.url}
				target="_blank"
				rel="external noopener noreferrer"
				class="group -mx-4 block rounded-lg p-4 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800/40"
			>
				<div class="flex items-baseline justify-between gap-4">
					<h2
						class="flex items-center gap-1.5 text-base font-medium text-neutral-900 transition-colors group-hover:text-blue-600 dark:text-neutral-100 dark:group-hover:text-blue-400"
					>
						<span>{project.title}</span>
						<ArrowUpRight
							size={14}
							strokeWidth={1.8}
							class="text-neutral-400 transition-colors group-hover:text-blue-600 dark:text-neutral-500 dark:group-hover:text-blue-400"
						/>
					</h2>
				</div>

				<p class="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
					{project.description}
				</p>

				<div class="mt-3 flex flex-wrap items-center gap-1.5">
					{#each project.tags as tag (tag)}
						<span
							class="rounded bg-neutral-200/60 px-2 py-0.5 font-mono text-xs text-neutral-600 dark:bg-neutral-800/80 dark:text-neutral-400"
						>
							{tag}
						</span>
					{/each}
				</div>
			</a>
		{/each}
	</div>
</section>
