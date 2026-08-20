<svelte:head>
	<title>Yann Amsellem</title>
</svelte:head>

<section class="home-intro" aria-label="About Yann Amsellem">
	<h1 class="heading">
		Hey, I'm Yann <span class="wave" aria-hidden="true">👋</span>
	</h1>

	<p>I'm a Senior Platform and Backend Engineer based in Marseille, France 🇫🇷 (100% remote).</p>

	<p>
		For the past 10+ years, I've been building distributed systems, event-driven pipelines, and
		high-scale SaaS platforms. Frontend development and UI engineering have always been part of that
		journey, from early React applications and design systems to modern SvelteKit apps,
		offline-first PWAs, and client-side media engines with WASM and WebCodecs.
	</p>

	<p>
		I mostly work with <strong class="highlight">Go</strong>,
		<strong class="highlight">TypeScript</strong>, and
		<strong class="highlight">Rust</strong>, paired with
		<strong class="highlight">SvelteKit</strong>,
		<strong class="highlight">React</strong>, and
		<strong class="highlight">ClickHouse</strong>
		for data-heavy web applications. I care about software simplicity, fast interfaces, and solid developer
		experience.
	</p>

	<p>
		Currently exploring Edge infrastructure with Cloudflare, local AI workflows, and Model Context
		Protocol (MCP) tooling.
	</p>

	<p class="links-paragraph">
		Find me on
		<a
			href="https://github.com/yannamsellem"
			target="_blank"
			rel="external noopener noreferrer"
			class="text-link"
			aria-label="Yann Amsellem on GitHub (opens in new tab)">GitHub</a
		>,
		<a
			href="https://x.com/yannamsellem"
			target="_blank"
			rel="external noopener noreferrer"
			class="text-link"
			aria-label="Yann Amsellem on Twitter / X (opens in new tab)">Twitter</a
		>,
		<a
			href="https://linkedin.com/in/yann-amsellem"
			target="_blank"
			rel="external noopener noreferrer"
			class="text-link"
			aria-label="Yann Amsellem on LinkedIn (opens in new tab)">LinkedIn</a
		>, or email me at
		<a href="mailto:yann.ams94@gmail.com" class="code-link" aria-label="Email yann.ams94@gmail.com"
			>yann.ams94@gmail.com</a
		>.
	</p>
</section>

<style>
	.home-intro {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		font-size: 0.9375rem;
		line-height: 1.65;
		color: var(--text-secondary);
		font-weight: 400;
	}

	@media (min-width: 640px) {
		.home-intro {
			font-size: 1rem;
		}
	}

	.heading {
		font-size: 1.5rem;
		font-weight: 600;
		letter-spacing: -0.025em;
		color: var(--text-primary);
		margin-bottom: 0.5rem;
	}

	@media (min-width: 640px) {
		.heading {
			font-size: 1.875rem;
		}
	}

	.wave {
		display: inline-block;
		transform-origin: bottom right;
		transition: transform 0.2s ease;
	}

	.heading:hover .wave {
		transform: rotate(12deg);
	}

	.highlight {
		font-weight: 500;
		color: var(--text-primary);
	}

	.links-paragraph {
		padding-top: 0.5rem;
	}

	.text-link {
		color: var(--text-primary);
		text-decoration: none;
		border-bottom: 1px solid var(--border-link);
		padding-bottom: 2px;
		transition:
			border-color var(--transition-base),
			color var(--transition-base);
	}

	.text-link:hover {
		border-color: var(--border-link-hover);
	}

	.code-link {
		display: inline-block;
		font-family: var(--font-mono);
		font-size: 0.875rem;
		padding: 0.125rem 0.375rem;
		border-radius: var(--radius-sm);
		background-color: var(--bg-code);
		color: var(--text-primary);
		text-decoration: none;
		transition: background-color var(--transition-base);
	}

	.code-link:hover {
		background-color: var(--bg-tag-hover);
	}
</style>
