<script lang="ts">
	// meta
	import Meta from '$lib/components/layout/Meta.svelte';
	import metaog from '$lib/assets/images/meta/meta-og-card.webp';
	import meta512 from '$lib/assets/images/meta/meta-square-512.webp';
	import meta500 from '$lib/assets/images/meta/meta-square-500.webp';
	//
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

<Meta
	title="CAS | Services"
	description="Explore our range of reliable property appraisal and consulting services. Expert advice to help you confidently manage real estate decisions."
	ogDescription="CAS offers professional appraisal and consulting services including legal support, market analysis, estate planning, and more."
	twitterTitle="CAS Services | Property Appraisals & Consulting"
	twitterDescription="Comprehensive, friendly appraisal services and real estate consulting. Making your property decisions easier across the Midwest."
	ogImage={metaog}
	twitterImage={metaog}
/>
<SectionHeader
	title="Services"
	body="Quality appraisals for your properties. We're focused on providing you the best appraisal services so you can make well informed business decisions"
></SectionHeader>

<div class="px-8">
	<div class="z-[1000] container mx-auto -mt-16">
		<div class="z-50 mb-10 grid w-full gap-x-8 gap-y-4 lg:grid-cols-3">
			{#each featuredServices as service}
				<Services_ImageCard
					title={service.title}
					img={service.img}
					imgAlt={service.imgAlt}
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
</div>
