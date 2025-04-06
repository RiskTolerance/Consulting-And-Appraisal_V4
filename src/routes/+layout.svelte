<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import Navigation from '$lib/components/layout/Navigation.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import MobileNavigation from '$lib/components/layout/MobileNavigation.svelte';
	import StaticSocialTab from '$lib/components/layout/StaticSocialTab.svelte';
</script>

<div class="flex min-h-screen flex-col justify-between">
	<div>
		<Navigation />
		<MobileNavigation />
		<StaticSocialTab></StaticSocialTab>
		{@render children()}
	</div>
	<Footer />
</div>
