<script lang="ts">
	import BlockHeader from '$lib/components/blocks/BlockHeader.svelte';
	import SectionHeader from '$lib/components/blocks/SectionHeader.svelte';
	import Services_Card from '$lib/components/cards/Services_Card.svelte';
	import Services_ImageCard from '$lib/components/cards/Services_ImageCard.svelte';
	import type { Services } from './+page.server';

	let { data }: { data: Services } = $props();
	let serviceData = $state({ services: data?.services });
	const featuredServices = serviceData.services.filter((service) => service.featured);
	const restServices = serviceData.services.filter((service) => !service.featured);
</script>

<SectionHeader
	title="Services"
	body="Quality appraisals for your properties. We're focused on providing you the best appraisal services so you can make well informed business decisions"
></SectionHeader>

<div class="sectionMarginX z-[1000] -mt-16">
	<div class="z-50 mb-10 grid w-full gap-x-8 gap-y-4 lg:grid-cols-3">
		{#each featuredServices as service}
			<Services_ImageCard
				title={service.title}
				img={service.img}
				serviceDescription={service.serviceDescription}
			/>
		{:else}
			<p>loading</p>
		{/each}
	</div>

	<BlockHeader title="Additional Services"></BlockHeader>

	<div class="mb-10 grid w-full gap-x-12 gap-y-6 md:grid-cols-1 lg:grid-cols-2">
		{#each restServices as service}
			<Services_Card
				title={service.title}
				img={service.img}
				serviceDescription={service.serviceDescription}
			/>
		{:else}
			<p>loading</p>
		{/each}
	</div>
</div>
