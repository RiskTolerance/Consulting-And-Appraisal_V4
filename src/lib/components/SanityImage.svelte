<script lang="ts">
	import type { SanityImageAssetDocument } from '@sanity/client';
	let {
		img,
		loaded = false
	}: {
		img: SanityImageAssetDocument;
		loaded: boolean;
	} = $props();
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
			src={img.url}
			alt={img.alt}
			onload={() => (loaded = true)}
		/>
	</div>
{/if}
