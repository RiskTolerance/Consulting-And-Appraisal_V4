<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import Navigation from '$lib/components/layout/Navigation.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import MobileNavigation from '$lib/components/layout/MobileNavigation.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.bunny.net" />
	<link
		href="https://fonts.bunny.net/css?family=raleway:300,300i,500,500i,800,800i"
		rel="stylesheet"
	/>
</svelte:head>

<Navigation />
<MobileNavigation />
{@render children()}
<Footer />
