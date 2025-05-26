<script lang="ts">
	import FacebookIcon from '$lib/components/icons/FacebookIcon.svelte';
	import LinkedinIcon from '$lib/components/icons/LinkedinIcon.svelte';
	import XIcon from '$lib/components/icons/XIcon.svelte';
	import { config } from '$lib/appConfig.svelte';
	import { ArrowRight, Building, MailCheck, Phone, AtSign } from '@lucide/svelte';
	import { enhance } from '$app/forms';
</script>

<footer class="bg-brand-teal-med text-brand-light dark:bg-brand-teal-dark w-full py-12 font-bold">
	<div
		class="container mx-auto grid grid-cols-1 justify-items-center gap-8 px-8 align-top sm:grid-cols-2 md:grid-cols-3"
	>
		<div id="footer-contact" class="flex flex-col gap-4">
			<div class="contact-item flex gap-2">
				<Phone></Phone>
				<span>+1 (605) 202-0440</span>
			</div>
			<div class="contact-item flex gap-2">
				<AtSign></AtSign>
				<a target="_blank" href="mailto:hello@consultingappraisal.com"
					>hello@consultingappraisal.com</a
				>
			</div>
			<div class="contact-item flex gap-2">
				<Building></Building>
				<address>
					<span class="sr-only">Physical Address:</span>
					<strong>Consulting &amp; Appraisal Services</strong><br />
					Suite 200<br />
					2500 W 49th St<br />
					Sioux Falls, SD
				</address>
			</div>
			<div class="contact-item flex gap-2">
				<MailCheck></MailCheck>
				<address>
					<span class="sr-only">Mailing Address:</span>
					<strong>Consulting &amp; Appraisal Services</strong><br />
					#104<br />
					4800 South Louise Ave<br />
					Sioux Falls, SD
				</address>
			</div>
		</div>
		<div id="footer-mailing-list">
			<h2 class="mb-6 text-xl">Subscribe to our newsletter.<br /> Get our latest insights.</h2>
			<form
				class="flex flex-col items-end"
				method="POST"
				action="/actions?/newsletterSubscribe"
				use:enhance
			>
				<input
					class="text-brand-dark mb-2 w-full rounded-sm bg-teal-50 text-sm font-light"
					type="email"
					name="email"
					placeholder="john.doe@email.com"
					autocomplete="email"
				/>
				<button
					class="hover:bg-brand-light hover:text-brand-teal-med flex w-[150px] cursor-pointer justify-start gap-2 rounded-sm px-4 py-2 transition-all duration-300 hover:gap-4"
					type="submit">Subscribe <ArrowRight></ArrowRight></button
				>
			</form>
		</div>
		<div id="footer-specilization" class="flex flex-col gap-4">
			<h2 class="text-xl">Specializations</h2>
			<ul class="ml-8 list-disc">
				<li>Legal Issues & Expert Court Testimony</li>
				<li>RealEstate Consulting</li>
				<li>Probate</li>
			</ul>
			<a class="underline" href="/services">and much more...</a>
		</div>
		<div class="flex items-center gap-6 md:hidden">
			<a
				aria-label="Linkedin Social Link"
				class=" fill-brand-light hover:fill-brand-teal-light cursor-pointer"
				href={config.socialLinks.linkedin}
				target="_blank"
			>
				<LinkedinIcon></LinkedinIcon>
			</a>
			<a
				aria-label="X Social Link"
				class="fill-brand-light hover:fill-brand-teal-light cursor-pointer"
				href={config.socialLinks.x}
				target="_blank"
			>
				<XIcon></XIcon>
			</a>
			<a
				aria-label="Facebook Social Link"
				class=" fill-brand-light hover:fill-brand-teal-light cursor-pointer"
				href={config.socialLinks.facebook}
				target="_blank"
			>
				<FacebookIcon></FacebookIcon>
			</a>
		</div>
	</div>
</footer>
