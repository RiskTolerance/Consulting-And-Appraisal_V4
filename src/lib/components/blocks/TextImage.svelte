<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { Picture } from 'imagetools-core';

	export type Aspect = 'square' | 'landscape' | 'portrait';

	const aspectObj = {
		square: 'aspect-square',
		landscape: 'aspect-landscape',
		portrait: 'aspect-[3/4] w-[400px]'
	};
	let { text, image, aspectRatio }: { text: Snippet; image: Picture; aspectRatio: Aspect } =
		$props();
</script>

<div class="w-full px-8">
	<div class="container mx-auto grid grid-cols-1 md:grid-cols-2">
		<!-- Text -->
		<div class="my-12 flex w-full items-center justify-center">
			<div class="prose">
				{@render text()}
			</div>
		</div>
		<!-- Image -->
		<div class="min-h-[300px] w-full p-8">
			<enhanced:img
				alt="building"
				class="mx-auto overflow-clip object-cover object-center {aspectObj[aspectRatio]}"
				src={image}
			></enhanced:img>
		</div>
	</div>
</div>
