<script lang="ts">
	import type { SanityImageAssetDocument } from '@sanity/client';

	let {
		title,
		img,
		serviceDescription
	}: { title: string; img: SanityImageAssetDocument; serviceDescription: string } = $props();
</script>

<li
	class="bg-brand-teal-med hover:bg-brand-teal-dark text-brand-light flex flex-col items-center rounded-sm px-10 py-12 duration-300"
>
	<h2 class="mb-3 text-xl font-bold lg:mb-4 lg:text-2xl">
		{title}
	</h2>
	<p class="text-sm lg:text-base">
		{serviceDescription}
	</p>
</li>
