<script lang="ts">
	import { goto, preloadData } from '$app/navigation';
	import SanityImage from '$lib/components/SanityImage.svelte';
	import { Calendar, User } from '@lucide/svelte';
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
	class="dark:bg-brand-teal-med dark:shadow-brand-teal-light/20 relative flex w-full cursor-pointer flex-col overflow-hidden rounded-md shadow-lg duration-200 hover:scale-[1.01]"
	type="button"
>
	<div class="absolute inset-0">
		{#if img}
			<SanityImage {img} loaded={false} />
		{/if}
	</div>
	<div class="absolute inset-0 flex items-end">
		<div class=" bg-brand-teal-med/80 dark:bg-brand-dark/80 text-brand-light flex w-full flex-col">
			<h2 class="my-4 px-6 text-left text-xl font-bold sm:mr-[20%] lg:px-8 lg:text-3xl">
				{title}
			</h2>
			<div class="mb-4 flex space-x-8 px-6 text-sm sm:text-base lg:px-8">
				<div class="flex space-x-2">
					<!-- <i class="fa-solid fa-user pt-1"></i> -->
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

			<p class="mb-4 overflow-hidden px-8 text-left text-sm text-ellipsis sm:text-base">
				{excerpt} Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo magnam in alias recusandae
				voluptatum! Similique nisi ab quae quisquam nobis placeat delectus.
			</p>
		</div>
	</div>
	<!-- <div class="h-1/2 p-4 lg:m-6">
		<p class="h-full overflow-hidden text-ellipsis">{excerpt}</p>
	</div> -->
</button>
