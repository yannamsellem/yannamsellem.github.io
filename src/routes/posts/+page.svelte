<script lang="ts">
	import { posts } from '$lib/data/posts';
	import PostCard from '$lib/components/PostCard.svelte';

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

<section class="posts-page" aria-labelledby="posts-title">
	<header class="page-header">
		<h1 id="posts-title" class="page-title">Posts</h1>
		<p class="page-subtitle">Articles, deep dives, and technical publications.</p>
	</header>

	<div class="years-container">
		{#each years as group (group.year)}
			<section class="year-group" aria-labelledby="year-{group.year}">
				<div class="year-header">
					<h2 id="year-{group.year}" class="year-label">
						{group.year}
					</h2>
					<div class="year-divider" aria-hidden="true"></div>
				</div>

				<ul class="posts-list" role="list">
					{#each group.items as post (post.title)}
						<li>
							<PostCard {post} />
						</li>
					{/each}
				</ul>
			</section>
		{/each}
	</div>
</section>

<style>
	.posts-page {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
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

	.years-container {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
	}

	.year-group {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.year-header {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.year-label {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.05em;
		color: var(--text-muted);
		text-transform: uppercase;
	}

	.year-divider {
		height: 1px;
		flex: 1;
		background-color: var(--border-subtle);
	}

	.posts-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
