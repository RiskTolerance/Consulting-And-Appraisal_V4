<script lang="ts">
	import FacebookIcon from '$lib/components/icons/FacebookIcon.svelte';
	import LinkedinIcon from '$lib/components/icons/LinkedinIcon.svelte';
	import TwitterIcon from '$lib/components/icons/TwitterIcon.svelte';
	import { ArrowRight, Building, MailCheck, Phone } from '@lucide/svelte';
</script>

<footer class="bg-brand-teal-med text-brand-light dark:bg-brand-teal-dark w-full py-12 font-bold">
	<div
		class="container mx-auto grid grid-cols-2 justify-items-center gap-4 px-8 align-top md:grid-cols-3"
	>
		<div id="footer-contact" class="flex flex-col gap-4">
			<div class="contact-item flex gap-2">
				<Phone></Phone>
				<span>+1 (123) 456-7890</span>
			</div>
			<div class="contact-item flex gap-2">
				<MailCheck></MailCheck>
				<a href="mailto:info@example.com">info@example.com</a>
			</div>
			<div class="contact-item flex gap-2">
				<Building></Building>
				<p>123 Main Street, Suite 100<br />Cityville, ST 12345</p>
			</div>
		</div>
		<div id="footer-mailing-list">
			<h3 class="mb-6">Subscribe to our newsletter.<br /> Get our latest insights.</h3>
			<form class="flex flex-col items-end" action="POST">
				<input
					class="mb-2 w-full rounded-sm bg-teal-50 text-sm font-light"
					type="email"
					placeholder="Enter your email address"
				/>
				<button
					class="hover:bg-brand-light hover:text-brand-teal-med flex w-[150px] cursor-pointer justify-start gap-2 rounded-sm px-4 py-2 transition-all duration-300 hover:gap-4"
					type="submit">Subscribe <ArrowRight></ArrowRight></button
				>
			</form>
		</div>
		<div id="footer-specilization" class="flex flex-col gap-4">
			<h3>Specialization</h3>
			<ul class="ml-8 list-disc">
				<li>Capitalization rate studies</li>
				<li>Estate Planning & Probate</li>
				<li>Purchase and listing decisions</li>
			</ul>
			<a class="hover: underline" href="/services">and much more...</a>
		</div>
		<div class="flex items-center gap-6 md:hidden" id="footer-socials">
			<LinkedinIcon></LinkedinIcon>
			<TwitterIcon></TwitterIcon>
			<FacebookIcon></FacebookIcon>
		</div>
	</div>
</footer>
