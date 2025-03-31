<script lang="ts">
	import BlockHeader from '$lib/components/blocks/BlockHeader.svelte';
	import SectionHeader from '$lib/components/blocks/SectionHeader.svelte';
	import type { PageServerData } from '../$types';

	let { data }: { data: PageServerData } = $props();

	console.log(data);
</script>

<SectionHeader
	title="Services"
	body="Quality appraisals for your properties. We're focused on providing you the best appraisal services so you can make well informed business decisions"
></SectionHeader>

<div class="sectionMarginX -mt-16">
	<div class="mb-10 grid w-full gap-x-8 gap-y-4 lg:grid-cols-3">
		<!-- {#each primaryService as service}
			<ImageCard data={service} />
		{:else}
			<p>loading</p>
		{/each} -->
	</div>

	<BlockHeader title="Additional Services"></BlockHeader>

	<div class="mb-10 grid w-full gap-x-12 gap-y-6 md:grid-cols-1 lg:grid-cols-2">
		<!-- {#each secondaryService as service}
			<Services_Card data={service} />
		{:else}
			<p>loading</p>
		{/each} -->
	</div>
</div>
