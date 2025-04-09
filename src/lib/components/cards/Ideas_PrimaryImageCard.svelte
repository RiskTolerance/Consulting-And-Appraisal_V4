<script lang="ts">
	import { goto, preloadData } from '$app/navigation';
	import SanityImage from '$lib/components/SanityImage.svelte';
	import { Calendar, User } from '@lucide/svelte';
	import type { SanityImageAssetDocument } from '@sanity/client/stega';

	let {
		title,
		author,
		authorImg,
		date,
		excerpt,
		img,
		imgAlt,
		slug
	}: {
		title: string;
		author: string;
		authorImg: SanityImageAssetDocument;
		date: string;
		excerpt: string;
		img: SanityImageAssetDocument;
		imgAlt?: string;
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
	class="dark:bg-brand-teal-med dark:shadow-brand-teal-light/20 relative flex w-full cursor-pointer flex-col overflow-hidden rounded-md shadow-lg duration-200 hover:scale-[1.01]"
	type="button"
>
	<div class="absolute inset-0">
		{#if img}
			<SanityImage {img} width={1050} {imgAlt} loaded={false} />
		{/if}
	</div>
	<div class="absolute inset-0 flex items-end">
		<div class=" bg-brand-teal-med/80 dark:bg-brand-dark/80 text-brand-light flex w-full flex-col">
			<h2 class="my-4 px-6 text-left text-xl font-bold sm:mr-[20%] lg:px-8 lg:text-3xl">
				{title}
			</h2>
			<div class="mb-4 flex items-center space-x-8 px-6 text-sm sm:text-base lg:px-8">
				<div class="flex items-center space-x-2">
					<div class="aspect-square h-10 overflow-clip rounded-full">
						<SanityImage img={authorImg} width={100} imgAlt="Employee Image" loaded={false}
						></SanityImage>
					</div>
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

			<p class="mb-4 overflow-hidden px-8 text-left text-sm text-ellipsis sm:text-base">
				{excerpt}
			</p>
		</div>
	</div>
</button>
