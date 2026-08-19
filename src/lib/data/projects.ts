import type { ProjectItem } from '$lib/types';

export const projects: ProjectItem[] = [
	{
		title: '@agnosticeng/agx',
		description:
			'Desktop & Web AI analytics platform for ClickHouse built with Tauri, Rust, and SvelteKit.',
		url: 'https://github.com/agnosticeng/agx',
		tags: ['Rust', 'SvelteKit', 'ClickHouse', 'Tauri']
	},
	{
		title: 'framecraft',
		description:
			'Pure client-side video editor foundation powered by WebCodecs, WASM demuxing, and Web Workers.',
		url: 'https://github.com/yannamsellem/framecraft',
		tags: ['React', 'WebCodecs', 'WASM', 'TypeScript']
	},
	{
		title: 'dix-de-der',
		description:
			'Modern, offline-first PWA point counter for French Contrée & Coinche with automatic dealer rotation and Marseille scoring rules.',
		url: 'https://github.com/yannamsellem/dix-de-der',
		tags: ['React', 'TypeScript', 'PWA', 'Dexie.js', 'Cloudflare Workers']
	},
	{
		title: '@agnosticeng/degen',
		description: 'Open-source notebook platform for blockchain analytics and interactive queries.',
		url: 'https://github.com/agnosticeng/degen',
		tags: ['SvelteKit', 'ClickHouse', 'Turso / SQLite']
	},
	{
		title: '@agnosticeng/token-flow',
		description: 'Interactive graph visualization tool for token holders and transfer patterns.',
		url: 'https://github.com/agnosticeng/token-flow',
		tags: ['SvelteKit', 'D3.js', 'GraphQL']
	},
	{
		title: '@agnosticeng/agp-mcp',
		description:
			'Model Context Protocol (MCP) server connecting AI agents to the Agnostic analytics platform.',
		url: 'https://github.com/agnosticeng/agp-mcp',
		tags: ['Rust', 'MCP', 'AI Tools', 'ClickHouse']
	},
	{
		title: '@agnosticeng/cli',
		description:
			'Fast command-line interface for querying data lakehouses and ClickHouse instances.',
		url: 'https://github.com/agnosticeng/cli',
		tags: ['Rust', 'CLI', 'ClickHouse', 'Data Lakehouse']
	},
	{
		title: '@agnosticeng/sqlite',
		description:
			'Lightweight SQLite client for browser environments backed by WebAssembly and OPFS.',
		url: 'https://github.com/agnosticeng/sqlite',
		tags: ['TypeScript', 'WASM', 'SQLite']
	},
	{
		title: '@agnosticeng/migrate',
		description: 'Client-side SQL schema migration engine running directly in the browser.',
		url: 'https://github.com/agnosticeng/migrate',
		tags: ['TypeScript', 'SQL', 'Migrations', 'WASM']
	},
	{
		title: '@agnosticeng/heroicons-svelte',
		description: 'Lightweight, tree-shakable Svelte component wrapper for Tailwind Labs Heroicons.',
		url: 'https://github.com/agnosticeng/heroicons-svelte',
		tags: ['Svelte', 'Icons', 'TypeScript']
	}
];
