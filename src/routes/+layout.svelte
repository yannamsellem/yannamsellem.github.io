<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div
	class="mx-auto flex min-h-screen max-w-2xl flex-col justify-between px-6 selection:bg-neutral-300/40 dark:selection:bg-neutral-700/40"
>
	<div>
		<Header />
		<main class="py-4">
			{@render children()}
		</main>
	</div>
	<Footer />
</div>
