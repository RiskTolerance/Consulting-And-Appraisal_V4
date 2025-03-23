<script lang="ts">
	let { buttonText, url }: { buttonText?: string; url?: string } = $props();
	import { Button } from 'bits-ui';
</script>

{#if url}
	<Button.Root
		class="from-brand-teal-light via-brand-teal-med to-brand-teal-light  dark:via-brand-teal-dark  flex cursor-pointer items-center justify-center overflow-hidden rounded-sm bg-gradient-to-r bg-[length:250%] bg-left p-[3px] shadow transition-all duration-300 hover:scale-[1.02] hover:bg-right"
		href={url}
	>
		<span
			class="text-brand-dark bg-brand-light dark:text-brand-teal-light dark:bg-brand-dark flex items-center justify-center rounded-sm bg-left px-4 py-1 font-bold"
		>
			{buttonText}
		</span>
	</Button.Root>
{:else}
	<!-- Maybe cusomize this to handle POST requests? -->
	<Button.Root
		class="from-brand-light via-brand-teal-med to-brand-light dark:from-brand-teal-light dark:via-brand-teal-dark dark:to-brand-teal-light flex cursor-pointer items-center justify-center overflow-hidden rounded-sm bg-gradient-to-r bg-[length:250%] bg-left p-[3px] transition-all duration-300 hover:scale-[1.02] hover:bg-right"
	>
		<span
			class="text-brand-dark bg-brand-light dark:text-brand-teal-light dark:bg-brand-dark flex items-center justify-center rounded-sm bg-left px-4 py-1"
		>
			{buttonText}
		</span>
	</Button.Root>
{/if}
