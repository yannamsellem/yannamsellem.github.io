<script lang="ts">
	import { posts } from '$lib/data/posts';
	import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';

	// Group posts by year descending
	const years = $derived.by(() => {
		const uniqueYears = Array.from(new Set(posts.map((p) => p.year))).sort((a, b) => b - a);
		return uniqueYears.map((year) => ({
			year,
			items: posts.filter((p) => p.year === year)
		}));
	});
</script>

<svelte:head>
	<title>Posts — Yann Amsellem</title>
</svelte:head>

<section class="space-y-10">
	<div>
		<h1
			class="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-100"
		>
			Posts
		</h1>
		<p class="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
			Articles, deep dives, and technical publications.
		</p>
	</div>

	<div class="space-y-10">
		{#each years as group (group.year)}
			<div class="space-y-4">
				<div class="flex items-center gap-3">
					<span
						class="font-mono text-xs font-semibold tracking-wider text-neutral-400 uppercase dark:text-neutral-500"
					>
						{group.year}
					</span>
					<div class="h-px flex-1 bg-neutral-200 dark:bg-neutral-800"></div>
				</div>

				<div class="space-y-4">
					{#each group.items as post (post.title)}
						<a
							href={post.url}
							target="_blank"
							rel="external noopener noreferrer"
							class="group -mx-4 block rounded-lg p-4 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800/40"
						>
							<div class="flex items-baseline justify-between gap-3">
								<h2
									class="flex items-center gap-1.5 text-base font-medium text-neutral-900 transition-colors group-hover:text-blue-600 dark:text-neutral-100 dark:group-hover:text-blue-400"
								>
									<span>{post.title}</span>
									<ArrowUpRight
										size={14}
										strokeWidth={1.8}
										class="shrink-0 text-neutral-400 transition-colors group-hover:text-blue-600 dark:text-neutral-500 dark:group-hover:text-blue-400"
									/>
								</h2>
							</div>

							<p class="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
								<span class="font-medium text-neutral-700 dark:text-neutral-300"
									>{post.platform}</span
								>
								<span class="mx-1 text-neutral-400">—</span>
								<span>{post.description}</span>
							</p>
						</a>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>
