<script lang="ts">
	import heroImage from '$lib/assets/images/building.jpg?enhanced';
	import heroImageDark from '$lib/assets/images/building-dark.png?enhanced';
	import BtnSolid from '../buttons/Btn_Solid.svelte';
	import { state } from '$lib/appState.svelte';
</script>

<div class="relative w-full px-8">
	<div class="absolute inset-0 -z-10">
		{#if state.darkMode}
			<enhanced:img class="h-full w-full object-cover" src={heroImageDark} alt="building"
			></enhanced:img>
		{:else}
			<enhanced:img class="h-full w-full object-cover" src={heroImage} alt="building"
			></enhanced:img>
		{/if}
	</div>
	<div
		class=" container mx-auto flex h-[60vh] max-w-md -translate-y-20 flex-col items-center justify-center gap-8"
	>
		<h1 class="text-center text-4xl font-bold">Welcome to our website</h1>
		<p class="text-center">
			We are a team of professionals who are dedicated to providing the best services to our
			clients.
		</p>
		<BtnSolid buttonText="About Us"></BtnSolid>
	</div>
</div>
