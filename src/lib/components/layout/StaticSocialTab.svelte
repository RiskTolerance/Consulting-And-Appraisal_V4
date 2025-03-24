<script lang="ts">
	import { Twitter, Facebook, Linkedin } from '@lucide/svelte';
	import { config } from '$lib/appConfig.svelte';
</script>

<div id="side-social-links" class="fixed top-2/3 right-0 z-[1000] translate-y-1/2 max-md:hidden">
	<ul
		class="bg-brand-teal-light dark:bg-brand-teal-dark flex w-12 flex-col items-center gap-3 rounded-tl-md rounded-bl-md py-4"
	>
		<li>
			<!-- TODO: replace with X -->
			<a href={config.socialLinks.x}
				><Twitter
					class="dark:hover:stroke-brand-teal-light hover:stroke-brand-light dark:stroke-brand-light stroke-brand-dark hover:scale-105"
				></Twitter></a
			>
		</li>
		<li>
			<a href={config.socialLinks.facebook}
				><Facebook
					class="dark:hover:stroke-brand-teal-light hover:stroke-brand-light dark:stroke-brand-light stroke-brand-dark hover:scale-105"
				></Facebook></a
			>
		</li>
		<li>
			<a href={config.socialLinks.linkedin}
				><Linkedin
					class="dark:hover:stroke-brand-teal-light hover:stroke-brand-light dark:stroke-brand-light stroke-brand-dark hover:scale-105"
				></Linkedin></a
			>
		</li>
	</ul>
</div>
