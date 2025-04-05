<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import Navigation from '$lib/components/layout/Navigation.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import MobileNavigation from '$lib/components/layout/MobileNavigation.svelte';
	import StaticSocialTab from '$lib/components/layout/StaticSocialTab.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.bunny.net" />
	<link
		href="https://fonts.bunny.net/css?family=raleway:300,300i,500,500i,800,800i"
		rel="stylesheet"
	/>
	<link rel="stylesheet" href="https://use.typekit.net/fer8wuf.css" />
</svelte:head>

<div class="flex min-h-screen flex-col justify-between">
	<div>
		<Navigation />
		<MobileNavigation />
		<StaticSocialTab></StaticSocialTab>
		{@render children()}
	</div>
	<Footer />
</div>
