<script lang="ts">
	import HomeSection from '$lib/components/blocks/homepage/Home_Section.svelte';
	import Hero from '$lib/components/blocks/homepage/Home_Hero.svelte';

	// images
	import section1Img from '$lib/assets/images/suit.jpg?enhanced';
	import section2Img from '$lib/assets/images/idea.jpg?enhanced';
	import section3Img from '$lib/assets/images/phone.jpg?enhanced';
	// meta
	import Meta from '$lib/components/layout/Meta.svelte';
	import metaog from '$lib/assets/images/meta/meta-og-card.webp';
	import meta512 from '$lib/assets/images/meta/meta-square-512.webp';
	import meta500 from '$lib/assets/images/meta/meta-square-500.webp';
	// TODO: remove this
	const servicesText =
		'We’re here to help you make confident decisions with clear, reliable property appraisals and consulting. Whether it’s a farm, a business, or something in between, you can count on us to give it the time and attention it deserves.';
	const ideasText =
		'We like to share what we’ve learned along the way. From local market trends to tips on property planning, our ideas section offers helpful info without all the jargon—just good, honest insights.';
	const contactText =
		'Got questions? We’re happy to chat. Whether you’re ready to get started or just want to learn more, feel free to reach out. We’ll do our best to point you in the right direction.';
</script>

<Meta
	title="CAS | Home"
	description="Professional, reliable property appraisals and consulting in South Dakota, Nebraska, Iowa, and Minnesota. Friendly advice to help you make informed decisions."
	ogDescription="Trusted real estate appraisal and consulting firm serving the Midwest from Sioux Falls, SD. Get clear, expert advice with a friendly approach."
	twitterTitle="CAS | Trusted Appraisal & Consulting"
	twitterDescription="Clear, reliable property appraisal services and consulting—helpful, approachable, and rooted in the Midwest."
	ogImage={metaog}
	twitterImage={metaog}
/>
<Hero></Hero>
<HomeSection
	title="Services"
	body={servicesText}
	btnText="Visit Services Page"
	btnHref="/services"
	image={section1Img}
	topMarginClass="-top-32"
	bottomMarginClass="-bottom-10"
	reverse={false}
></HomeSection>
<HomeSection
	title="Ideas"
	body={ideasText}
	btnText="Visit Ideas Page"
	btnHref="/ideas"
	image={section2Img}
	topMarginClass="-top-10"
	bottomMarginClass="-bottom-10"
	reverse={true}
></HomeSection>
<HomeSection
	title="Contact"
	body={contactText}
	btnText="Visit Contact Page"
	btnHref="/contact"
	image={section3Img}
	topMarginClass="-top-10"
	bottomMarginClass="-bottom-10"
	reverse={false}
></HomeSection>
