<script lang="ts">
	import heroImage from '$lib/assets/images/building.jpg?enhanced';
	import heroImageDark from '$lib/assets/images/building-dark-2.png?enhanced';
	import BtnSolid from '../../buttons/Btn_Solid.svelte';
	import { state } from '$lib/appState.svelte';
</script>

<div class="relative w-full px-8">
	<div class="absolute inset-0 -z-10">
		{#if state.darkMode}
			<!-- <img
				class="hero-image h-full w-full object-cover object-center"
				src="https://www.consultingappraisal.com/cdn-cgi/image/width=1280/images/building-dark.png"
				alt="building"
			/> -->

			<!-- <img
				class="hero-image h-full w-full object-cover object-center"
				src="https://imagedelivery.net/LFYkgf13HxqD-r0JqcA7dg/475f2652-6511-4b1b-ba55-e14d4ee0a700/w=1600"
				alt="building at night"
			/> -->

			<enhanced:img
				class="hero-image h-full w-full object-cover object-center"
				fetchpriority="high"
				src={heroImageDark}
				sizes="(min-width: 1920px) 1600px, 
					 (min-width: 1440px) 1280px,
					 (min-width: 1024px) 960px,
					 (min-width: 640px) 640px,
					 100vw"
				alt="building"
			>
			</enhanced:img>
		{:else}
			<enhanced:img
				class="hero-image h-full w-full object-cover object-center"
				fetchpriority="high"
				src={heroImage}
				sizes="(min-width: 1920px) 1600px, 
					 (min-width: 1440px) 1280px,
					 (min-width: 1024px) 960px,
					 (min-width: 640px) 640px,
					 100vw"
				alt="building"
			>
			</enhanced:img>
		{/if}
	</div>
	<div
		class="sm:-translate-y-25 container mx-auto flex h-[90vh] max-w-lg -translate-y-16 flex-col items-center justify-center gap-8 sm:h-[80vh] md:h-[60vh] md:-translate-y-20"
	>
		<h1 class="text-center text-3xl font-bold md:text-4xl lg:text-5xl">Welcome to CAS</h1>
		<h2 class="text-center font-semibold md:text-lg lg:text-xl">
			C&A is a full-service consulting and real estate appraisal firm serving Eastern South Dakota,
			Northeastern Nebraska, and Western Iowa
		</h2>
		<BtnSolid buttonText="About Us" url="/about"></BtnSolid>
	</div>
</div>
