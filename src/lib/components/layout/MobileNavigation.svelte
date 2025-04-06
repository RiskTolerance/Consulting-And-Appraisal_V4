<script lang="ts">
	import { config } from '$lib/appConfig.svelte';
	import { page } from '$app/state';
	import { state } from '$lib/appState.svelte';
	import { innerWidth } from 'svelte/reactivity/window';

	$effect(() => {
		if (innerWidth.current && innerWidth.current > 768) {
			state.mobileNavToggle = false;
		}
	});

	function getNavLinkClass(path: string) {
		return page.url.pathname === path
			? 'text-brand-orange dark:text-brand-teal-light'
			: 'dark:text-brand-light';
	}
</script>

{#if state.mobileNavToggle}
	<div
		class="dark:bg-brand-dark/90 bg-brand-teal-dark/80 absolute z-500 h-screen w-screen overflow-hidden"
	>
		<div
			class="bg-brand-light dark:bg-brand-teal-dark absolute top-0 right-0 {!state.mobileNavToggle
				? 'translage-x-full'
				: ''} bottom-0 flex w-[30vw] min-w-[350px] items-center justify-center"
		>
			<ul class="flex flex-col gap-4 text-2xl font-bold">
				{#each config.navLinks as { href, label }}
					<li
						class="hover:text-brand-orange dark:hover:text-brand-teal-light {getNavLinkClass(href)}"
					>
						<a onclick={() => (state.mobileNavToggle = false)} {href}>{label}</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
{/if}
