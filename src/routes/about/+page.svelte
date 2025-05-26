<script>
	// meta
	import Meta from '$lib/components/layout/Meta.svelte';
	import metaog from '$lib/assets/images/meta/meta-og-card.webp';
	import meta512 from '$lib/assets/images/meta/meta-square-512.webp';
	import meta500 from '$lib/assets/images/meta/meta-square-500.webp';
	//
	import SectionHeader from '$lib/components/blocks/SectionHeader.svelte';
	import TextImage from '$lib/components/blocks/TextImage.svelte';
	import MR from '$lib/assets/images/mtrushmore.jpg?enhanced';
	import Wade from '$lib/assets/images/wade.jpg?enhanced';
	import Cooper from '$lib/assets/images/cooper.jpg?enhanced';
	import Austin from '$lib/assets/images/austin.jpg?enhanced';
	import BlockHeader from '$lib/components/blocks/BlockHeader.svelte';
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

{#snippet wade()}
	<h3>Wade D. Druin, J.D.</h3>
	<p>
		Wade holds a Certified General Appraisal license in Iowa, Nebraska, and South Dakota. He earned
		a bachelor's degree in business administration and accounting, a law degree from the University
		of South Dakota, and is a licensed attorney in South Dakota. He also completed post-doctoral
		studies in Management at the University of Florida's Warrington College of Business.
	</p>
	<p>
		With extensive experience in property appraisal, Wade has worked with commercial, retail,
		office, industrial, multifamily, new construction, and agricultural properties. Before joining
		Shaykett Appraisal, he was a valuation associate with CBRE. He is a member of the Appraisal
		Institute and the American Society of Farm Managers and Rural Appraisers.
	</p>
	<p>
		Wade’s career spans roles as a Tax Consultant with Deloitte Touche, practicing attorney, and 30
		years as a commissioned officer in the U.S. Air Force and Air National Guard, retiring as a
		lieutenant colonel. He also held leadership and academic positions at the South Dakota Small
		Business Development Center, the Business Research Bureau at the University of South Dakota, and
		the University of South Dakota Beacom School of Business.
	</p>
{/snippet}

{#snippet austin()}
	<h3>Austin Druin</h3>
	<p>
		Austin is currently completing his entry-level coursework to begin his career in real estate
		appraisal. He holds a degree from the University of South Dakota. Prior to joining the firm, he
		served six years in the South Dakota Air National Guard and worked at Polaris, where he managed
		international shipping operations.
	</p>
{/snippet}

{#snippet cooper()}
	<h3>Cooper Baloun</h3>
	<p>
		Cooper Baloun is a skilled valuation professional with experience appraising various property
		types, including commercial, retail, office, industrial, multifamily, new construction, and
		agricultural properties. He holds a Certified General Appraiser license in South Dakota.
	</p>
	<p>
		Cooper earned a Bachelor of Business Administration (BBA) degree in Finance from the University
		of South Dakota, where he participated in the Coyote Capital Management program, gaining
		valuable experience in investment management.
	</p>
	<p>
		His professional experience includes roles as a Financial Analyst at Sammons Financial Group,
		where he specialized in financial analysis and reporting, and as a Summer Analyst at Goldman
		Sachs, where he expanded his expertise in the financial sector.
	</p>
	<p>
		Cooper’s diverse background in finance and property valuation highlights his dedication to
		delivering professional and precise results in every project he undertakes.
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
<SectionHeader
	title="About"
	body="C.A.S is a full-service consulting and real estate appraisal firm serving Eastern South Dakota,Northeastern Nebraska, Western Iowa and Southwestern Minnesota."
></SectionHeader>
<BlockHeader title="Where We Come From"></BlockHeader>

<TextImage text={wherewecomefrom} image={MR} aspectRatio={'landscape'}></TextImage>
<BlockHeader title="Who We Are"></BlockHeader>
<TextImage text={wade} image={Wade} aspectRatio={'portrait'}></TextImage>
<TextImage text={cooper} image={Cooper} aspectRatio={'portrait'}></TextImage>
<TextImage text={austin} image={Austin} aspectRatio={'portrait'}></TextImage>
