<script lang="ts">
	import SectionHeader from '../blocks/SectionHeader.svelte';
	import IdeasPrimaryImageCard from '$lib/components/cards/Ideas_PrimaryImageCard.svelte';
	import IdeasSecondaryImageCard from '$lib/components/cards/Ideas_SecondaryImageCard.svelte';

	let { title, author, date, excerpt, img, slug } = $props();
</script>

<div>
	<p>{title}</p>
	<p>{author}</p>
	<p>{date}</p>
	<p>{excerpt}</p>
	<p>{img}</p>
	<p>{slug}</p>
</div>
