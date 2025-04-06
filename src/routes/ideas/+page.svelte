<script lang="ts">
	// meta
	import Meta from '$lib/components/layout/Meta.svelte';
	import metaog from '$lib/assets/images/meta/meta-og-card.webp';
	import meta512 from '$lib/assets/images/meta/meta-square-512.webp';
	import meta500 from '$lib/assets/images/meta/meta-square-500.webp';
	//
	import type { PageServerData } from '../$types';
	import SectionHeader from '$lib/components/blocks/SectionHeader.svelte';
	import type { Posts } from './proxy+page.server';
	import IdeasPrimaryImageCard from '$lib/components/cards/Ideas_PrimaryImageCard.svelte';
	import IdeasSecondaryImageCard from '$lib/components/cards/Ideas_SecondaryImageCard.svelte';

	let { data }: { data: Posts } = $props();
	let postData = $state({ posts: data?.posts });
	const featuredPosts = postData.posts.filter((post) => post.featured);
	const restPosts = postData.posts.filter((post) => !post.featured);
	const primaryPost = featuredPosts[0];
	const secondaryPosts = [featuredPosts[1], featuredPosts[2]];
</script>

<Meta
	title="CAS | Ideas"
	description="Helpful insights and practical advice on real estate trends, market analysis, and property appraisals—straight from our experienced team."
	ogDescription="Stay informed with useful real estate insights from CAS. Practical, jargon-free advice to make better property decisions."
	twitterTitle="CAS Ideas | Helpful Real Estate Insights"
	twitterDescription="Practical, helpful real estate insights without the fluff—straight from experienced appraisal professionals in Sioux Falls, SD."
	ogImage={metaog}
	twitterImage={metaog}
/>
<SectionHeader
	title="Ideas"
	body="Helpful insights and updates from the field. We share what we’ve learned to help you stay informed and make sound decisions—without the fluff."
></SectionHeader>

<div class="sectionMarginX z-[1000] -mt-16">
	<div class="mb-10 grid grid-cols-1 gap-y-5 lg:grid-cols-3 lg:gap-x-5">
		<div class="flex h-96 md:h-80 lg:col-span-2 lg:h-full">
			<IdeasPrimaryImageCard
				title={primaryPost.title}
				author={primaryPost.author}
				date={primaryPost.date}
				excerpt={primaryPost.excerpt}
				img={primaryPost.img}
				slug={primaryPost.slug}
			></IdeasPrimaryImageCard>
		</div>
		<div class="flex flex-col justify-between gap-y-5">
			{#if secondaryPosts}
				{#each secondaryPosts as post}
					<IdeasSecondaryImageCard
						title={post.title}
						author={post.author}
						date={post.date}
						img={post.img}
						slug={post.slug}
					/>
				{/each}
			{:else}
				<div class="bg-brand-light h-full w-full"></div>
			{/if}
		</div>
	</div>

	<div class="flex flex-col md:flex-row">
		<div class="mb-10 flex justify-center md:w-1/4 md:justify-end">
			<h1 class="text-3xl font-bold md:border-r-4 md:pr-12">Older Posts</h1>
		</div>
		<div class="flex w-full flex-col md:w-3/4 md:pl-12">
			<div
				class="bg-brand-teal-light/10 dark:bg-brand-teal-med/10 mb-10 h-20 w-full rounded-md"
			></div>
			<div
				class="bg-brand-teal-light/10 dark:bg-brand-teal-med/10 mb-10 h-20 w-full rounded-md"
			></div>
			<div
				class="bg-brand-teal-light/10 dark:bg-brand-teal-med/10 mb-10 h-20 w-full rounded-md"
			></div>
			<div
				class="bg-brand-teal-light/10 dark:bg-brand-teal-med/10 mb-10 h-20 w-full rounded-md"
			></div>
		</div>
	</div>
</div>
