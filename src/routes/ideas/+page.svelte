<script lang="ts">
	import type { PageServerData } from '../$types';
	import SectionHeader from '$lib/components/blocks/SectionHeader.svelte';
	let { data }: { data: PageServerData } = $props();
	console.log(data);
</script>

<SectionHeader
	title="Ideas"
	body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua."
></SectionHeader>
