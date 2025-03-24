<script lang="ts">
	import { state } from '$lib/appState.svelte';
	import { config } from '$lib/appConfig.svelte';
	import { page } from '$app/state';

	import Logo from '$lib/components/Logo.svelte';
	import LogoDark from '$lib/components/Logo-Dark.svelte';
	import DarkModeToggle from '$lib/components/buttons/Btn_ToggleDarkMode.svelte';
	import MobileNavToggle from '$lib/components/buttons/Btn_NavToggle.svelte';

	function getNavLinkClass(path: string) {
		if (page.url.pathname === '/') {
			return 'dark:text-brand-light hover:text-brand-light dark:hover:text-brand-teal-light';
		}
		return page.url.pathname === path
			? 'text-brand-orange dark:text-brand-dark hover:text-brand-orange dark:hover:text-brand-dark'
			: 'dark:text-brand-light hover:text-brand-orange dark:hover:text-brand-dark';
	}
</script>

<div class="absolute z-[1000] w-full px-4 py-8 md:px-8">
	<nav
		class=" container mx-auto flex justify-between {state.mobileNavToggle
			? 'justify-end gap-4'
			: 'justify-between'}"
	>
		<a href="/" class="h-20 sm:h-26 md:block lg:h-32">
			{#if state.darkMode}
				<LogoDark></LogoDark>
			{:else}
				<Logo></Logo>
			{/if}
		</a>

		<div class="flex items-center gap-6">
			<!-- Desktop Nav -->
			<ul
				class="dark:text-brand-light text-md hidden items-center gap-6 font-bold md:flex lg:text-lg"
			>
				{#each config.navLinks as { href, label }}
					<li class=" {getNavLinkClass(href)}">
						<a {href}>{label}</a>
					</li>
				{/each}
			</ul>
			<div class="flex gap-6">
				<!-- Dark Mode Toggle -->
				<DarkModeToggle></DarkModeToggle>
				<!-- Mobile Nav Toggle -->
				<MobileNavToggle></MobileNavToggle>
			</div>
		</div>
	</nav>
</div>
