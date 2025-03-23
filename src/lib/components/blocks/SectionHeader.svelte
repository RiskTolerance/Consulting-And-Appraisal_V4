<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		title = 'title',
		body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		custom
	}: { title: string; body?: string; custom?: Snippet } = $props();
</script>

<div
	class="titlecard relative flex min-h-[45vh] w-full items-center justify-center px-8 pt-28 md:min-h-[35vh]"
>
	<div
		class="from-brand-light to-brand-teal-light dark:from-brand-teal-light dark:to-brand-teal-dark absolute inset-0 -z-20 bg-gradient-to-bl"
	></div>
	{#if custom}
		{@render custom()}
	{:else}
		<div>
			<h1 class="text-4xl font-bold">{title}</h1>
			<p class="font-bold">
				{body}
			</p>
		</div>
	{/if}
</div>

<style>
	.titlecard {
		height: 100%;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='49.75' viewBox='0 0 100 199'%3E%3Cg fill='%23000000' fill-opacity='0.3'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
		background-repeat: repeat;
		background-size: auto;
		background-position: top left;
		background-blend-mode: overlay; /* Optional: makes pattern blend with gradient */
	}
</style>
