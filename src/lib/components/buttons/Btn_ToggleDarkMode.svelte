<script lang="ts">
	import { state } from '$lib/appState.svelte';
	import { Switch } from 'bits-ui';
	import { Sun, MoonStar } from '@lucide/svelte';
</script>

<Switch.Root
	bind:checked={state.darkMode}
	class="dark:bg-brand-teal-dark bg-brand-light shadow-brand-dark/20 dark:shadow-brand-dark h-8 w-13 cursor-pointer overflow-hidden rounded-full shadow-inner transition-colors"
>
	<Switch.Thumb
		class="dark:bg-brand-dark bg-brand-light dark:shadow-brand-teal-dark mx-1 flex h-6 w-6 items-center justify-center rounded-full shadow-md transition-all dark:translate-x-5"
	>
		{#if state.darkMode}
			<MoonStar class=" stroke-brand-light h-4 w-4 stroke-2"></MoonStar>
		{:else}
			<Sun class=" h-4 w-4 stroke-amber-600 stroke-3"></Sun>
		{/if}
	</Switch.Thumb>
</Switch.Root>
