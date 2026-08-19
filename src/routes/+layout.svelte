<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import SkipLink from '$lib/components/SkipLink.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<SkipLink />

<div class="site-wrapper">
	<Header />
	<div class="layout-container">
		<main id="main-content" class="main-content" tabindex="-1">
			{@render children()}
		</main>
		<Footer />
	</div>
</div>

<style>
	.site-wrapper {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	.layout-container {
		max-width: var(--max-width);
		width: 100%;
		margin: 0 auto;
		padding: 0 1.5rem;
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	.main-content {
		flex: 1;
		padding: 1rem 0;
	}

	.main-content:focus {
		outline: none;
	}
</style>
