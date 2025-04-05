<script lang="ts">
	import type { SanityImageAssetDocument } from '@sanity/client';
	import SanityImage from '../SanityImage.svelte';
	let {
		title,
		img,
		serviceDescription
	}: { title: string; img: SanityImageAssetDocument; serviceDescription: string } = $props();
</script>

<div
	class="bg-brand-light dark:bg-brand-teal-dark flex overflow-clip rounded-sm shadow-lg lg:flex-col"
>
	<div class="flex w-1/3 lg:h-52 lg:w-full">
		<SanityImage {img} loaded={false} />
	</div>

	<li class="flex h-fit w-2/3 flex-col justify-start lg:w-full">
		<h2 class="my-4 px-6 text-xl lg:px-8 lg:text-3xl">
			{title}
		</h2>
		<p class="mb-8 px-6 text-sm lg:px-8 lg:text-base">
			{serviceDescription}
		</p>
	</li>
</div>
