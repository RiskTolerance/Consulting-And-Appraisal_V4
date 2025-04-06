<script lang="ts">
	import heroImage from '$lib/assets/images/building.jpg?enhanced';
	import heroImageDark from '$lib/assets/images/building-dark.png?enhanced';
	import BtnSolid from '../../buttons/Btn_Solid.svelte';
	import { state } from '$lib/appState.svelte';
</script>

<div class="relative w-full px-8">
	<div class="absolute inset-0 -z-10">
		{#if state.darkMode}
			<enhanced:img
				class="h-full w-full object-cover object-center"
				src={heroImageDark}
				alt="building at night"
			></enhanced:img>
		{:else}
			<enhanced:img class="h-full w-full object-cover object-center" src={heroImage} alt="building"
			></enhanced:img>
		{/if}
	</div>
	<div
		class="container mx-auto flex h-[90vh] max-w-lg -translate-y-16 flex-col items-center justify-center gap-8 sm:h-[80vh] sm:-translate-y-25 md:h-[60vh] md:-translate-y-20"
	>
		<h1 class="text-center text-3xl font-bold md:text-4xl lg:text-5xl">Welcome to CAS</h1>
		<h2 class="text-center font-semibold md:text-lg lg:text-xl">
			C&A is a full-service consulting and real estate appraisal firm serving Eastern South Dakota,
			Northeastern Nebraska, Western Iowa, and Southwestern Minnesota
		</h2>
		<BtnSolid buttonText="About Us" url="/about"></BtnSolid>
	</div>
</div>
