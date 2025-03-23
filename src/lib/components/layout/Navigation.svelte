<script lang="ts">
	import { Switch } from 'bits-ui';
	import { state } from '$lib/appState.svelte';
	import { page } from '$app/state';
	import { Sun, MoonStar } from '@lucide/svelte';
	import Logo from '../Logo.svelte';

	$effect(() => {
		if (state.darkMode) {
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
		}
	});

	const navLinks = [
		{ href: '/about', label: 'About' },
		{ href: '/services', label: 'Services' },
		{ href: '/ideas', label: 'Ideas' },
		{ href: '/contact', label: 'Contact' }
	];

	function getNavLinkClass(path: string) {
		return page.url.pathname === path ? 'text-brand-orange' : 'dark:text-brand-light';
	}
</script>

<div class="dark:bg-brand-dark bg-brand-light w-full px-8 py-4">
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
					<li class="hover:text-brand-orange {getNavLinkClass(href)}">
						<a {href}>{label}</a>
					</li>
				{/each}
			</ul>
			<!-- Mobile Nav Toggle -->

			<Switch.Root
				bind:checked={state.darkMode}
				class="dark:bg-brand-teal-dark bg-brand-light shadow-brand-dark/20 dark:shadow-brand-dark h-8 w-13 cursor-pointer overflow-hidden rounded-full shadow-inner transition-colors"
			>
				<Switch.Thumb
					class="dark:bg-brand-dark bg-brand-light dark:shadow-brand-teal-dark mx-1 flex h-6 w-6 items-center justify-center rounded-full shadow-md transition-all dark:translate-x-5"
				>
					{#if state.darkMode}
						<MoonStar class=" stroke-brand-light h-4 w-4 stroke-2"></MoonStar>
					{:else}
						<Sun class=" h-4 w-4 stroke-amber-600 stroke-3"></Sun>
					{/if}
				</Switch.Thumb>
			</Switch.Root>
		</div>
	</nav>
</div>

<!-- <div class="flex items-center space-x-3">
	<Switch.Root
		id="dnd"
		name="hello"
		class="focus-visible:ring-foreground focus-visible:ring-offset-background data-[state=checked]:bg-foreground data-[state=unchecked]:bg-dark-10 data-[state=unchecked]:shadow-mini-inset dark:data-[state=checked]:bg-foreground peer inline-flex h-[36px] min-h-[36px] w-[60px] shrink-0 cursor-pointer items-center rounded-full px-[3px] transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50"
	>
		<Switch.Thumb
			class="bg-background data-[state=unchecked]:shadow-mini dark:border-background/30 dark:bg-foreground dark:shadow-popover pointer-events-none block size-[30px] shrink-0 rounded-full transition-transform data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0 dark:border dark:data-[state=unchecked]:border"
		/>
	</Switch.Root>
	<Label.Root for="dnd" class="text-sm font-medium">Do not disturb</Label.Root>
</div> -->
