<script lang="ts">
	import type { SanityImageAssetDocument } from '@sanity/client';
	let {
		img,
		width,
		imgAlt,
		loaded = false
	}: {
		img: SanityImageAssetDocument;
		width?: number;
		imgAlt?: string;
		loaded: boolean;
	} = $props();
	console.log(img.metadata.dimensions.aspectRatio);
	console.log(img.url);
	const imgUrl = (() => {
		if (width) {
			return `${img.url}?w=${width}`;
		} else {
			return img.url;
		}
	})();
</script>

{#if img}
	<div
		style="background-image: url({img.metadata.lqip}); background-color: {img.metadata.palette
			?.dominant?.background}"
		class="relative h-full w-full bg-cover"
	>
		<img
			height={img.metadata.dimensions.height}
			width={img.metadata.dimensions.width}
			loading="lazy"
			style="opacity: {loaded ? 1 : 0}; "
			class="absolute inset-0 h-full w-full object-cover transition-opacity duration-200"
			src={imgUrl}
			alt={imgAlt ?? 'a generic image'}
			onload={() => (loaded = true)}
		/>
	</div>
{/if}
