<script lang="ts">
	import { enhance } from '$app/forms';
	import { z } from 'zod';
	import SectionHeader from '$lib/components/blocks/SectionHeader.svelte';
	import BtnSolid from '$lib/components/buttons/Btn_Solid.svelte';

	const schema = z.object({
		name: z.string().min(1, { message: 'Name is required' }),
		email: z.string().email({ message: 'Invalid email address' }),
		message: z.string().min(1, { message: 'Message is required' }),
		subscriber: z.boolean().optional()
	});
</script>

<SectionHeader title="Contact Us" body="Get in touch with us!"></SectionHeader>

<div class="sectionMarginX z-[1000] -mt-16 mb-16">
	<form
		method="POST"
		use:enhance
		class="bg-brand-light dark:bg-brand-teal-med flex w-full flex-col items-center space-y-4 rounded-sm px-10 py-6 shadow-lg lg:px-20 lg:py-14"
	>
		<h1 class="w-full text-3xl font-bold">Send Us A Message</h1>
		<p class="w-full">
			We would love to hear from you! Use the form below to send us a message. Alternitively, you
			can send us a good ol' fashioned email, give us a call, or connect with us on social media.
		</p>
		<div class="flex w-full flex-wrap items-start gap-8 lg:flex-row lg:space-y-0 lg:space-x-5">
			<div>
				<label for="email">Name:</label>
				<input
					name="name"
					placeholder="John Doe"
					autocomplete="given-name"
					class="border-brand-teal-med w-full rounded-sm border-2 px-5 py-3"
					type="text"
				/>
			</div>

			<div>
				<label for="email">Email:</label>
				<input
					class="border-brand-teal-med w-full rounded-sm border-2 px-5 py-3"
					type="text"
					name="email"
					placeholder="john.doe@email.com"
					autocomplete="email"
				/>
			</div>
		</div>

		<div class="flex w-full flex-col items-end space-x-0 lg:space-y-0 lg:space-x-5">
			<label class="w-full" for="message">Message:</label>
			<textarea
				class="border-brand-teal-med w-full rounded-sm border-2 px-5 py-3"
				name="message"
				id=""
				cols="30"
				rows="10"
			></textarea>
		</div>

		<div class="flex items-center space-x-2">
			<!-- TODO: figure out this input color shit -->
			<input
				class="border-brand-teal-med ring-brand-teal-light !accent-brand-teal-dark aspect-square rounded-sm border-2"
				type="checkbox"
				name="subscriber"
			/>
			<label class="text-xs md:text-sm" for="subscriber">Subscribe to our newsletter?</label>
		</div>

		<BtnSolid buttonText="Submit" />
	</form>
</div>
