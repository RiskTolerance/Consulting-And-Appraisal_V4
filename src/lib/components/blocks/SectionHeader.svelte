<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		title = 'title',
		body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		custom
	}: { title: string; body?: string; custom?: Snippet } = $props();
</script>

<div
	class="titlecard dark:bg-brand-teal-dark bg-brand-teal-light flex min-h-[30vh] w-full items-center justify-center px-8"
>
	{#if custom}
		{@render custom()}
	{:else}
		<div class="prose">
			<h1 class="text-brand-dark dark:text-brand-light text-4xl font-bold">{title}</h1>
			<p class="text-brand-dark dark:text-brand-light font-bold">
				{body}
			</p>
		</div>
	{/if}
</div>

<style>
	.titlecard {
		height: 100%;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='49.75' viewBox='0 0 100 199'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
	}
</style>
