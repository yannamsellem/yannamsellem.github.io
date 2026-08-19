<script lang="ts">
	interface Props {
		targetId?: string;
	}

	let { targetId = 'main-content' }: Props = $props();
</script>

<a href="#{targetId}" class="skip-link"> Skip to content </a>

<style>
	.skip-link {
		position: absolute;
		top: -100px;
		left: 1.5rem;
		z-index: 100;
		padding: 0.5rem 1rem;
		background-color: var(--text-primary);
		color: var(--bg-primary);
		font-size: 0.875rem;
		font-weight: 500;
		border-radius: var(--radius-sm);
		text-decoration: none;
		transition: top 0.2s ease;
	}

	.skip-link:focus {
		top: 1rem;
	}
</style>
