<script lang="ts">
	import { state } from '$lib/appState.svelte';
	import { config } from '$lib/appConfig.svelte';
	import { page } from '$app/state';

	import Logo from '../Logo.svelte';
	import DarkModeToggle from '$lib/components/buttons/Btn_ToggleDarkMode.svelte';
	import MobileNavToggle from '$lib/components/buttons/Btn_NavToggle.svelte';

	function getNavLinkClass(path: string) {
		return page.url.pathname === path
			? 'text-brand-orange dark:text-brand-dark'
			: 'dark:text-brand-light';
	}
</script>

<div class="absolute z-[1000] h-28 w-full px-8 py-4">
	<nav
		class=" container mx-auto flex justify-between {state.mobileNavToggle
			? 'justify-end gap-4'
			: 'justify-between'}"
	>
		<a href="/" class=" h-20 md:block">
			<Logo></Logo>
		</a>

		<div class="flex items-center gap-6">
			<!-- Desktop Nav -->
			<ul
				class="dark:text-brand-light text-md hidden items-center gap-6 font-bold md:flex lg:text-lg"
			>
				{#each config.navLinks as { href, label }}
					<li class="hover:text-brand-orange dark:hover:text-brand-dark {getNavLinkClass(href)}">
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
