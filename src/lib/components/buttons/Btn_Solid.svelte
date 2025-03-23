<script lang="ts">
	let { buttonText = 'Click Me!' }: { buttonText: string } = $props();
</script>

<button
	class="from-brand-light via-brand-teal-med to-brand-light dark:from-brand-teal-light dark:via-brand-teal-dark dark:to-brand-teal-light flex cursor-pointer items-center justify-center overflow-hidden rounded-sm bg-gradient-to-r bg-[length:250%] bg-left p-[3px] transition-all duration-300 hover:scale-[1.02] hover:bg-right"
>
	<span
		class="text-brand-dark bg-brand-light dark:text-brand-teal-light dark:bg-brand-dark flex items-center justify-center rounded-sm bg-left px-4 py-1"
	>
		{buttonText}
	</span>
</button>
