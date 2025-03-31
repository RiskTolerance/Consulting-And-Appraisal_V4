<script lang="ts">
	import { goto, preloadData } from '$app/navigation';
	import SanityImage from '$lib/components/SanityImage.svelte';
	import type { SanityImageAssetDocument } from '@sanity/client/stega';

	let {
		title,
		author,
		date,
		img,
		slug
	}: { title: string; author: string; date: string; img: SanityImageAssetDocument; slug: string } =
		$props();

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
	class="relative flex cursor-pointer overflow-hidden rounded-md shadow-lg lg:flex-col"
	type="button"
>
	<div class="bg-brand-light absolute h-full w-full">
		{#if img.metadata.lqip}
			<SanityImage
				img={img.url}
				url={img.url}
				lqip={img.metadata.lqip}
				loaded={false}
				alt={img.originalFilename ?? ''}
			/>
		{/if}
	</div>
	<div class=" bg-brand-dark/80 text-brand-light z-10 mt-24 flex h-full w-full flex-grow flex-col">
		<h2 class="my-4 px-6 text-left text-xl lg:text-2xl">
			{title}
		</h2>
		<div class="mb-4 flex space-x-8 px-6 text-sm sm:text-base">
			<div class="flex space-x-2">
				<i class="fa-solid fa-user pt-1"></i>
				<p>{author}</p>
			</div>
			<div class="flex space-x-2">
				<i class="fa-solid fa-calendar pt-1"></i>
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
