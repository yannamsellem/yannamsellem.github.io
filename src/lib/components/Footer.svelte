<script lang="ts">
	import Mail from '@lucide/svelte/icons/mail';
	import LinkedinIcon from './LinkedinIcon.svelte';
</script>

<footer
	class="mt-24 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-8 pb-12 text-xs text-neutral-500 sm:flex-row dark:border-neutral-800 dark:text-neutral-500"
>
	<div>
		<span>© {new Date().getFullYear()} Yann Amsellem</span>
		<span class="mx-2">·</span>
		<span>Marseille, France</span>
	</div>

	<div class="flex items-center gap-4">
		<a
			href="mailto:yann.ams94@gmail.com"
			rel="external"
			class="flex items-center gap-1.5 transition-colors hover:text-neutral-900 dark:hover:text-neutral-300"
		>
			<Mail size={14} strokeWidth={1.8} />
			<span>Email</span>
		</a>

		<a
			href="https://linkedin.com/in/yann-amsellem"
			target="_blank"
			rel="external noopener noreferrer"
			class="flex items-center gap-1.5 transition-colors hover:text-neutral-900 dark:hover:text-neutral-300"
		>
			<LinkedinIcon size={14} />
			<span>LinkedIn</span>
		</a>
	</div>
</footer>
