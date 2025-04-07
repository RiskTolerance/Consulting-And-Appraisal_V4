<script lang="ts">
	import SectionHeader from '$lib/components/blocks/SectionHeader.svelte';
	import { PortableText } from '@portabletext/svelte';
	import type { SinglePost } from './+page.server';

	let { data }: { data: SinglePost } = $props();
	let postData = $state({ post: data?.post[0] });
	console.log(postData.post.body);
</script>

<SectionHeader title={postData.post.title} body=""></SectionHeader>
<div class="prose dark:prose-invert m-8 mx-auto mb-16">
	{#if postData.post.body}
		<PortableText value={postData.post.body}></PortableText>
	{/if}
</div>
