import type { PostItem } from '$lib/types';

export const posts: PostItem[] = [
	{
		title: 'Adding Auth0 to Your Tauri App: Secure Authentication for Agx on Web and Desktop',
		description:
			'Deep dive into OAuth2, deep-linking, and CORS handling across Web and Tauri desktop apps.',
		url: 'https://dev.to/yannamsellem/adding-auth0-to-your-tauri-app-secure-authentication-for-agx-on-web-and-desktop-1h4k',
		platform: 'DEV.to',
		year: 2025
	},
	{
		title: 'Unlocking Token Secrets: Mapping Out Top Holders and Transfers — Part 2',
		description:
			'Transforming raw blockchain data into an interactive, real-time graph visualization using SvelteKit and D3.js.',
		url: 'https://medium.com/agnosticeng/unlocking-token-secrets-mapping-out-top-holders-and-transfers-part-2',
		platform: 'Medium',
		year: 2024
	},
	{
		title: 'Unlocking Token Secrets: Mapping Out Top Holders and Transfers — Part 1',
		description:
			'Gathering and querying on-chain token holder balances and transfer volumes using SQL to build graph nodes and edges.',
		url: 'https://medium.com/agnosticeng/unlocking-token-secrets-mapping-out-top-holders-and-transfers-part-1-32ac7a0cae0a',
		platform: 'Medium',
		year: 2024
	}
];
