<script lang="ts">
	import FacebookIcon from '$lib/components/icons/FacebookIcon.svelte';
	import LinkedinIcon from '$lib/components/icons/LinkedinIcon.svelte';
	import TwitterIcon from '$lib/components/icons/TwitterIcon.svelte';

	import { config } from '$lib/appConfig.svelte';
</script>

<div id="side-social-links" class="fixed top-2/3 right-0 z-[1000] translate-y-1/2 max-md:hidden">
	<ul
		class="bg-brand-teal-light dark:bg-brand-teal-dark flex w-12 flex-col items-center gap-3 rounded-tl-md rounded-bl-md py-4"
	>
		<li>
			<!-- TODO: replace with X -->
			<a href={config.socialLinks.x}>
				<TwitterIcon></TwitterIcon>
			</a>
		</li>
		<li>
			<a href={config.socialLinks.facebook}>
				<FacebookIcon></FacebookIcon>
			</a>
		</li>
		<li>
			<a href={config.socialLinks.linkedin}>
				<LinkedinIcon></LinkedinIcon>
			</a>
		</li>
	</ul>
</div>
