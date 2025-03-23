<script lang="ts">
	import { state } from '$lib/appState.svelte';
</script>

<button
	aria-label="Toggle Navigation"
	class="bg-brand-light {state.mobileNavToggle
		? 'dark:bg-brand-teal-med'
		: 'dark:bg-brand-teal-dark'} shadow-brand-dark/20 dark:shadow-brand-dark h-8 w-8 cursor-pointer rounded-md shadow-inner md:hidden"
	onclick={() => {
		state.mobileNavToggle = !state.mobileNavToggle;
	}}
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="stroke-brand-dark dark:stroke-brand-light mx-auto h-6 w-6 transition-transform duration-300"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		style="transform: rotate({state.mobileNavToggle ? 0 : 90}deg);"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M4 6h16M4 12h16m-7 6h7"
		/>
	</svg>
</button>
