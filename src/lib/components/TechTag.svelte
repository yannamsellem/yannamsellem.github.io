<script lang="ts">
	interface Props {
		label: string;
	}

	let { label }: Props = $props();
</script>

<span class="tech-tag">
	{label}
</span>

<style>
	.tech-tag {
		display: inline-block;
		font-family: var(--font-mono);
		font-size: 0.75rem;
		padding: 0.125rem 0.5rem;
		border-radius: var(--radius-sm);
		background-color: var(--bg-tag);
		color: var(--text-secondary);
		line-height: 1.4;
		transition: background-color var(--transition-base);
	}
</style>
