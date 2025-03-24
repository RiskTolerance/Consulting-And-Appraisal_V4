<script lang="ts">
	import HomeSection from '$lib/components/blocks/Home_Section.svelte';
	import Hero from '$lib/components/blocks/homepage/Hero.svelte';

	// images
	import section1Img from '$lib/assets/images/suit.jpg?enhanced';
	import section2Img from '$lib/assets/images/idea.jpg?enhanced';
	import section3Img from '$lib/assets/images/phone.jpg?enhanced';
	const placeholderText =
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem amet incidunt, dignissimos quae nulla ad porro nam deserunt. Temporibus architecto necessitatibus in saepe praesentium eum molestias alias odit nihil omnis odio ipsam sit, quidem quia maxime tempore mollitia corrupti ipsum.';
</script>

<Hero></Hero>
<HomeSection
	title="Services"
	body={placeholderText}
	btnText="Visit Services Page"
	btnHref="/services"
	image={section1Img}
	topMarginClass="-top-32"
	bottomMarginClass="-bottom-10"
	reverse={false}
></HomeSection>
<HomeSection
	title="Ideas"
	body={placeholderText}
	btnText="Visit Ideas Page"
	btnHref="/ideas"
	image={section2Img}
	topMarginClass="-top-10"
	bottomMarginClass="-bottom-10"
	reverse={true}
></HomeSection>
<HomeSection
	title="Contact"
	body={placeholderText}
	btnText="Visit Contact Page"
	btnHref="/contact"
	image={section3Img}
	topMarginClass="-top-10"
	bottomMarginClass="-bottom-10"
	reverse={false}
></HomeSection>
