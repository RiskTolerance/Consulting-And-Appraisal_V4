<script lang="ts">
	import { goto, preloadData } from '$app/navigation';
	import SanityImage from '$lib/components/SanityImage.svelte';

	let {
		title,
		author,
		date,
		excerpt,
		img,
		slug
	}: { title: string; author: string; date: Date; excerpt: string; img: string; slug: string } =
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
	class="relative flex w-full cursor-pointer flex-col overflow-hidden rounded-md rounded-b-md shadow-lg"
	type="button"
>
	<div class="bg-brand-light relative bottom-0 flex h-full">
		<div class="absolute h-full w-full">
			<!-- <SanityImage {...img} /> -->
			<div class="bg-opacity-80 bg-brand-dark absolute bottom-0 flex h-63 w-full flex-col">
				<h2 class="my-4 flex-grow px-6 text-xl sm:mr-[20%] lg:px-8 lg:text-3xl">
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
