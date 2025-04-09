<script lang="ts">
	import type { SanityImageAssetDocument } from '@sanity/client';
	import SanityImage from '../SanityImage.svelte';
	let {
		title,
		img,
		imgAlt,
		serviceDescription
	}: { title: string; img: SanityImageAssetDocument; imgAlt: string; serviceDescription: string } =
		$props();
</script>

<div
	class="bg-brand-light dark:bg-brand-teal-dark flex overflow-clip rounded-sm shadow-lg lg:flex-col"
>
	<div class="flex w-1/3 lg:h-52 lg:w-full">
		<SanityImage {img} width={500} {imgAlt} loaded={false} />
	</div>

	<div class="flex h-fit w-2/3 flex-col justify-start lg:w-full">
		<h2
			class="my-4 h-auto px-6 text-xl font-bold lg:h-24 lg:px-8 lg:text-2xl 2xl:h-auto 2xl:min-h-16"
		>
			{title}
		</h2>
		<p class="mb-8 px-6 text-sm lg:px-8 lg:text-base">
			{serviceDescription}
		</p>
	</div>
</div>
