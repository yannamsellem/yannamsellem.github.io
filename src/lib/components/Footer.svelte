<script lang="ts">
	import Mail from '@lucide/svelte/icons/mail';
	import LinkedinIcon from './LinkedinIcon.svelte';
</script>

<footer class="site-footer">
	<div class="copyright">
		<span>© {new Date().getFullYear()} Yann Amsellem</span>
		<span class="separator" aria-hidden="true">·</span>
		<span>Marseille, France</span>
	</div>

	<div class="footer-links">
		<a
			href="mailto:yann.ams94@gmail.com"
			rel="external"
			class="footer-link"
			aria-label="Send email to Yann Amsellem"
		>
			<Mail size={14} strokeWidth={1.8} />
			<span>Email</span>
		</a>

		<a
			href="https://linkedin.com/in/yann-amsellem"
			target="_blank"
			rel="external noopener noreferrer"
			class="footer-link"
			aria-label="LinkedIn Profile (opens in new tab)"
		>
			<LinkedinIcon size={14} />
			<span>LinkedIn</span>
		</a>
	</div>
</footer>

<style>
	.site-footer {
		margin-top: 4rem;
		padding: 2rem 0 3rem;
		border-top: 1px solid var(--border-subtle);
		font-size: 0.75rem;
		color: var(--text-muted);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}

	@media (min-width: 640px) {
		.site-footer {
			flex-direction: row;
		}
	}

	.copyright {
		display: flex;
		align-items: center;
	}

	.separator {
		margin: 0 0.5rem;
	}

	.footer-links {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.footer-link {
		display: flex;
		align-items: center;
		gap: 0.375rem;
		color: var(--text-muted);
		text-decoration: none;
		transition: color var(--transition-base);
	}

	.footer-link:hover {
		color: var(--text-primary);
	}
</style>
