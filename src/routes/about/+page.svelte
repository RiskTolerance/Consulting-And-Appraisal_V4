<script lang="ts">
	// meta
	import Meta from '$lib/components/layout/Meta.svelte';
	import metaog from '$lib/assets/images/meta/meta-og-card.webp';
	import meta512 from '$lib/assets/images/meta/meta-square-512.webp';
	import meta500 from '$lib/assets/images/meta/meta-square-500.webp';
	//
	import SectionHeader from '$lib/components/blocks/SectionHeader.svelte';
	import TextImage from '$lib/components/blocks/TextImage.svelte';
	import MR from '$lib/assets/images/mtrushmore.jpg?enhanced';
	import ServiceMap from '$lib/assets/images/Service_Area.png?enhanced';
	import BlockHeader from '$lib/components/blocks/BlockHeader.svelte';
	import Employee from '$lib/components/blocks/Employee.svelte';
	import type { GetEmployeesQuery } from '$lib/server/sanity/groqQueries';
	let { data }: { data: GetEmployeesQuery } = $props();
	console.log(data.employees[0]);
</script>

{#snippet wherewecomefrom()}
	<div class="text-pretty">
		<p>
			With experience in agricultural, commercial, litigation, government projects and real estate
			studies, our firm is qualified for any job. Since our start, we have continued to grow in
			expertise and location. With a presence in Sioux Falls, South Dakota and Sioux City, Iowa, and
			licensed in Iowa, Nebraska, and South Dakota, we are well positioned to serve our customers.<br
			/><br /> Our team has well over 10 years of experience in the field of consulting and appraisal.
			Let us put our experience to work for you.
		</p>
	</div>
{/snippet}

{#snippet whoweserve()}
	<p>
		C.A.S is a full-service consulting and real estate appraisal firm serving Eastern South
		Dakota,Northeastern Nebraska, Western Iowa and Southwestern Minnesota.
	</p>
{/snippet}

<Meta
	title="CAS | About"
	description="Meet our experienced team at Consulting & Appraisal Services, providing trusted property valuation and guidance across the Midwest."
	ogDescription="Learn more about our team at CAS—experienced appraisers providing friendly, dependable real estate consulting from Sioux Falls, SD."
	twitterTitle="About CAS | Meet Our Team"
	twitterDescription="Experienced property appraisal and consulting experts, committed to friendly, reliable service in South Dakota and beyond."
	ogImage={metaog}
	twitterImage={metaog}
/>
<SectionHeader title="About"></SectionHeader>
<BlockHeader title="Who We Serve"></BlockHeader>
<TextImage text={whoweserve} image={ServiceMap} aspectRatio={'landscape'} reverse={true}
></TextImage>
<BlockHeader title="Where We Come From"></BlockHeader>
<TextImage text={wherewecomefrom} image={MR} aspectRatio={'landscape'}></TextImage>
<BlockHeader title="Who We Are"></BlockHeader>
<div class="mb-12 px-8">
	<div class="container mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
		{#each data.employees as employee}
			<Employee {employee}></Employee>
		{/each}
	</div>
</div>
