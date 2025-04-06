<script lang="ts">
	import { goto, preloadData } from '$app/navigation';
	import SanityImage from '$lib/components/SanityImage.svelte';
	import { Calendar, User } from '@lucide/svelte';
	import type { SanityImageAssetDocument } from '@sanity/client/stega';

	let {
		title,
		author,
		date,
		img,
		imgAlt,
		slug
	}: {
		title: string;
		author: string;
		date: string;
		img: SanityImageAssetDocument;
		imgAlt: string;
		slug: string;
	} = $props();

	let preload = () => {
		preloadData(`/ideas/${slug}`);
	};

	let nav = () => {
		goto(`/ideas/${slug}`);
	};
</script>

<button
	onmouseover={preload}
	onfocus={preload}
	onclick={nav}
	class="relative flex cursor-pointer overflow-hidden rounded-md shadow-lg duration-200 hover:scale-[1.01] lg:flex-col"
	type="button"
>
	<div class="bg-brand-light absolute h-full w-full">
		{#if img}
			<SanityImage {img} {imgAlt} loaded={false} />
		{/if}
	</div>
	<div
		class="bg-brand-teal-med/80 dark:bg-brand-dark/80 text-brand-light z-10 mt-24 flex h-full w-full flex-grow flex-col"
	>
		<h2 class="my-4 px-6 text-left text-xl font-bold lg:text-2xl">
			{title}
		</h2>
		<div class="mb-4 flex space-x-8 px-6 text-sm sm:text-base">
			<div class="flex space-x-2">
				<User></User>
				<p>{author}</p>
			</div>
			<div class="flex space-x-2">
				<Calendar></Calendar>
				<p>
					{new Date(date).toLocaleDateString('en', {
						month: 'short',
						day: '2-digit',
						year: 'numeric'
					})}
				</p>
			</div>
		</div>
	</div>
</button>
