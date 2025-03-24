<script lang="ts">
	import HomeSection from '$lib/components/blocks/Home_Section.svelte';
	import Hero from '$lib/components/blocks/homepage/Hero.svelte';

	// images
	import section1Img from '$lib/assets/images/suit.jpg?enhanced';
</script>

<Hero></Hero>
<HomeSection
	title="title"
	body="adsafasdfgafhsdfgsdfg"
	image={section1Img}
	topMarginClass="-top-32"
	bottomMarginClass="-bottom-10"
></HomeSection>
