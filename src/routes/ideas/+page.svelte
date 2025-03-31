<script lang="ts">
	import type { PageServerData } from '../$types';
	import SectionHeader from '$lib/components/blocks/SectionHeader.svelte';
	import type { Posts } from './proxy+page.server';
	import IdeasPrimaryImageCard from '$lib/components/cards/Ideas_PrimaryImageCard.svelte';
	import IdeasSecondaryImageCard from '$lib/components/cards/Ideas_SecondaryImageCard.svelte';

	let { data }: { data: Posts } = $props();
	let postData = $state({ posts: data?.posts });
	const featuredPosts = postData.posts.filter((post) => post.featured);
	console.log(featuredPosts);
	const restPosts = postData.posts.filter((post) => !post.featured);
	const primaryPost = featuredPosts[0];
	const secondaryPosts = [featuredPosts[1], featuredPosts[2]];
</script>

<SectionHeader
	title="Ideas"
	body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua."
></SectionHeader>

<div class="sectionMarginX -mt-16">
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
				<div class="h-full w-full bg-gray-100"></div>
			{/if}
		</div>
	</div>

	<div class="flex flex-col md:flex-row">
		<div class="mb-10 flex justify-center md:w-1/4 md:justify-end">
			<h1 class="text-3xl font-bold md:border-r-4 md:pr-12">Older Posts</h1>
		</div>
		<div class="flex w-full flex-col md:w-3/4 md:pl-12">
			<div class="mb-10 h-20 w-full rounded-md bg-gray-100"></div>
			<div class="mb-10 h-20 w-full rounded-md bg-gray-100"></div>
			<div class="mb-10 h-20 w-full rounded-md bg-gray-100"></div>
			<div class="mb-10 h-20 w-full rounded-md bg-gray-100"></div>
		</div>
	</div>
</div>
