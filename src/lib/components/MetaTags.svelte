<script lang="ts">
	interface Props {
		title?: string;
		description?: string;
		ogTitle?: string;
		ogDescription?: string;
		ogType?: string;
		ogUrl?: string;
		ogImage?: string;
		twitterCard?: string;
		twitterCreator?: string;
		twitterImage?: string;
	}
	let {
		title = 'Yann Amsellem — Senior Platform & Backend Engineer',
		description = 'Senior Platform & Backend Engineer with 10+ years of experience in distributed systems, Go, Rust, ClickHouse, and modern client performance.',
		ogTitle = 'Yann Amsellem',
		ogDescription = 'Senior Platform & Backend Engineer based in Marseille, France.',
		ogType = 'website',
		ogUrl = 'https://yannamsellem.github.io/',
		ogImage = 'https://yannamsellem.github.io/og.png',
		twitterCard = 'summary_large_image',
		twitterCreator = '@yannamsellem',
		twitterImage = 'https://yannamsellem.github.io/og.png'
	}: Props = $props();
</script>

<title>{title}</title>
<meta name="description" content={description} />
<meta property="og:title" content={ogTitle} />
<meta property="og:description" content={ogDescription} />
<meta property="og:type" content={ogType} />
<meta property="og:url" content={ogUrl} />
<meta property="og:image" content={ogImage} />
<meta name="twitter:card" content={twitterCard} />
<meta name="twitter:creator" content={twitterCreator} />
<meta name="twitter:image" content={twitterImage} />
