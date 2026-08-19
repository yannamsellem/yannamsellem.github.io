import type { ProjectItem } from '$lib/types';

export const projects: ProjectItem[] = [
	{
		title: 'agx',
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
		tags: ['React 19', 'TypeScript', 'PWA', 'Dexie.js', 'Cloudflare Workers']
	},
	{
		title: 'degen',
		description: 'Open-source notebook platform for blockchain analytics and interactive queries.',
		url: 'https://github.com/agnosticeng/degen',
		tags: ['SvelteKit', 'ClickHouse', 'Turso / SQLite']
	},
	{
		title: 'token-flow',
		description: 'Interactive graph visualization tool for token holders and transfer patterns.',
		url: 'https://github.com/agnosticeng/token-flow',
		tags: ['SvelteKit', 'D3.js', 'GraphQL']
	}
];
