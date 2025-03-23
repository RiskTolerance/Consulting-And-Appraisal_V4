<script lang="ts">
	import { state } from '$lib/appState.svelte';
	import { page } from '$app/state';

	import Logo from '../Logo.svelte';
	import DarkModeToggle from '$lib/components/buttons/Btn_ToggleDarkMode.svelte';
	import MobileNavToggle from '$lib/components/buttons/Btn_NavToggle.svelte';

	const navLinks = [
		{ href: '/about', label: 'About' },
		{ href: '/services', label: 'Services' },
		{ href: '/ideas', label: 'Ideas' },
		{ href: '/contact', label: 'Contact' }
	];

	function getNavLinkClass(path: string) {
		return page.url.pathname === path
			? 'text-brand-orange dark:text-brand-dark'
			: 'dark:text-brand-light';
	}
</script>

<div class="absolute z-[1000] h-28 w-full px-8 py-4">
	<nav class=" container mx-auto flex justify-between">
		<a href="/" class="h-20">
			<Logo></Logo>
		</a>

		<div class="flex items-center gap-6">
			<!-- Desktop Nav -->
			<ul
				class="dark:text-brand-light text-md hidden items-center gap-6 font-bold md:flex lg:text-lg"
			>
				{#each navLinks as { href, label }}
					<li class="hover:text-brand-orange dark:hover:text-brand-dark {getNavLinkClass(href)}">
						<a {href}>{label}</a>
					</li>
				{/each}
			</ul>
			<!-- Mobile Nav Toggle -->
			<MobileNavToggle></MobileNavToggle>
			<!-- Dark Mode Toggle -->
			{#if !state.mobileNavToggle}
				<DarkModeToggle></DarkModeToggle>
			{/if}
		</div>
	</nav>
</div>
