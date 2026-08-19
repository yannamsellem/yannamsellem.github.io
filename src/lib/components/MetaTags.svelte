<script lang="ts">
	interface Props {
		title?: string;
		description?: string;
		ogTitle?: string;
		ogDescription?: string;
		ogType?: string;
		ogUrl?: string;
		twitterCard?: string;
		twitterCreator?: string;
	}

	let {
		title = 'Yann Amsellem — Senior Platform & Backend Engineer',
		description = 'Senior Platform & Backend Engineer with 10+ years of experience in distributed systems, Go, Rust, ClickHouse, and modern client performance.',
		ogTitle = 'Yann Amsellem',
		ogDescription = 'Senior Platform & Backend Engineer based in Marseille, France.',
		ogType = 'website',
		ogUrl = 'https://yannamsellem.github.io/',
		twitterCard = 'summary',
		twitterCreator = '@yannamsellem'
	}: Props = $props();
</script>

<title>{title}</title>
<meta name="description" content={description} />
<meta property="og:title" content={ogTitle} />
<meta property="og:description" content={ogDescription} />
<meta property="og:type" content={ogType} />
<meta property="og:url" content={ogUrl} />
<meta name="twitter:card" content={twitterCard} />
<meta name="twitter:creator" content={twitterCreator} />
