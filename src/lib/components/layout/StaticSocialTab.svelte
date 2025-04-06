<script lang="ts">
	import FacebookIcon from '$lib/components/icons/FacebookIcon.svelte';
	import LinkedinIcon from '$lib/components/icons/LinkedinIcon.svelte';

	import { config } from '$lib/appConfig.svelte';
	import XIcon from '../icons/XIcon.svelte';
</script>

<div id="side-social-links" class="fixed top-2/3 right-0 z-[1000] translate-y-1/2 max-md:hidden">
	<ul
		class="bg-brand-teal-light dark:bg-brand-teal-dark flex w-12 flex-col items-center gap-3 rounded-tl-md rounded-bl-md py-4"
	>
		<li>
			<!-- TODO: replace with X -->
			<a
				aria-label="X Social Link"
				class="fill-brand-light hover:fill-brand-dark cursor-pointer"
				href={config.socialLinks.x}
			>
				<XIcon></XIcon>
			</a>
		</li>
		<li>
			<a
				aria-label="Facebook Social Link"
				class=" fill-brand-light hover:fill-brand-dark cursor-pointer"
				href={config.socialLinks.facebook}
			>
				<FacebookIcon></FacebookIcon>
			</a>
		</li>
		<li>
			<a
				aria-label="Linkedin Social Link"
				class=" fill-brand-light hover:fill-brand-dark cursor-pointer"
				href={config.socialLinks.linkedin}
			>
				<LinkedinIcon></LinkedinIcon>
			</a>
		</li>
	</ul>
</div>
