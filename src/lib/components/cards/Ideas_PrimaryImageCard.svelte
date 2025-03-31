<script lang="ts">
	import { goto, preloadData } from '$app/navigation';
	import SanityImage from '$lib/components/SanityImage.svelte';
	import type { SanityImageAssetDocument } from '@sanity/client/stega';

	let {
		title,
		author,
		date,
		excerpt,
		img,
		slug
	}: {
		title: string;
		author: string;
		date: string;
		excerpt: string;
		img: SanityImageAssetDocument;
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
	class="relative flex w-full cursor-pointer flex-col overflow-hidden rounded-md rounded-b-md shadow-lg"
	type="button"
>
	<div class=" relative bottom-0 flex h-full">
		<div class="absolute h-full w-full">
			{#if img.metadata.lqip}
				<SanityImage
					img={img.url}
					url={img.url}
					lqip={img.metadata.lqip}
					loaded={false}
					alt={img.originalFilename ?? ''}
				/>
			{/if}
			<div class="bg-brand-dark/80 text-brand-light absolute bottom-0 flex h-1/2 w-full flex-col">
				<h2 class="my-4 flex-grow px-6 text-left text-xl sm:mr-[20%] lg:px-8 lg:text-3xl">
					{title}
				</h2>
				<div class="mb-4 flex space-x-8 px-6 text-sm sm:text-base lg:px-8">
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
		</div>
	</div>
	<div class="h-1/2 p-4 lg:m-6">
		<p class="h-full overflow-hidden text-ellipsis">{excerpt}</p>
	</div>
</button>
