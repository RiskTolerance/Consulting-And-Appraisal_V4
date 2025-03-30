<script lang="ts">
	let {
		img,
		url,
		lqip,
		alt,
		loaded = false
	}: { img: string; url: string; lqip: string; alt: string; loaded: boolean } = $props();
</script>

{#if img}
	<div style="background-image: url({lqip});" class="h-full w-full bg-cover">
		<img
			loading="lazy"
			style="opacity: {loaded ? 1 : 0};"
			class="h-full w-full object-cover transition-opacity duration-200"
			src={url}
			{alt}
			onload={() => (loaded = true)}
		/>
	</div>
{/if}
