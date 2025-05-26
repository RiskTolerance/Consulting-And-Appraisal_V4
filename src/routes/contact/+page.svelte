<script lang="ts">
	// meta
	import Meta from '$lib/components/layout/Meta.svelte';
	import metaog from '$lib/assets/images/meta/meta-og-card.webp';
	import meta512 from '$lib/assets/images/meta/meta-square-512.webp';
	import meta500 from '$lib/assets/images/meta/meta-square-500.webp';
	//
	import { enhance } from '$app/forms';
	import SectionHeader from '$lib/components/blocks/SectionHeader.svelte';
	import BtnSolid from '$lib/components/buttons/Btn_Solid.svelte';
	let { form } = $props();
</script>

<svelte:head>
	<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
</svelte:head>

<Meta
	title="CAS | Contact"
	description="Reach out to Consulting & Appraisal Services in Sioux Falls, SD for reliable, friendly help with property appraisals and real estate consulting."
	ogDescription="Need real estate advice or appraisal services? Contact CAS in Sioux Falls for helpful, straightforward guidance today."
	twitterTitle="Contact CAS | Friendly Property Experts"
	twitterDescription="Got property questions? Contact CAS for friendly, helpful appraisal and consulting services based in Sioux Falls, SD."
	ogImage={metaog}
	twitterImage={metaog}
/>
<SectionHeader title="Contact Us" body="Get in touch with us!"></SectionHeader>

<div class="w-full px-8">
	<div class="container z-[1000] mx-auto -mt-16 mb-16">
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
			<div class="flex w-full flex-wrap items-start gap-8 lg:space-x-5 lg:space-y-0">
				<div class="w-fit">
					<label for="email">Name:</label>
					<input
						name="name"
						placeholder="John Doe"
						autocomplete="given-name"
						class="{form?.errors?.name
							? 'border-red-600'
							: 'border-brand-teal-med'} text-brand-dark w-full rounded-sm border-2 px-5 py-3"
						type="text"
						value={form?.errors?.data ? form.errors.data.name : ''}
					/>
					{#if form?.errors?.name}
						<p class="mt-1 text-sm text-red-600">{form.errors.name[0]}</p>
					{/if}
				</div>

				<div class="w-fit">
					<label for="email">Email:</label>
					<input
						class="{form?.errors?.email
							? 'border-red-600'
							: 'border-brand-teal-med'} text-brand-dark w-full rounded-sm border-2 px-5 py-3"
						type="text"
						name="email"
						placeholder="john.doe@email.com"
						autocomplete="email"
						value={form?.errors?.data ? form.errors.data.email : ''}
					/>
					{#if form?.errors?.email}
						<p class="mt-1 text-sm text-red-600">{form.errors.email[0]}</p>
					{/if}
				</div>
			</div>

			<div class="flex w-full flex-col">
				<label class="w-full" for="message">Message:</label>
				<textarea
					class="{form?.errors?.message
						? 'border-red-600'
						: 'border-brand-teal-med'} text-brand-dark w-full rounded-sm border-2 px-5 py-3"
					name="message"
					value={form?.errors?.data && typeof form.errors.data.message === 'string'
						? form.errors.data.message
						: ''}
					cols="30"
					rows="10"
				></textarea>
				{#if form?.errors?.message}
					<p class=" mt-1 text-sm text-red-600">{form.errors.message[0]}</p>
				{/if}
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
			<div class="cf-turnstile" data-sitekey="0x4AAAAAABeqSyvqAjUv-9kx"></div>
			{#if form?.success}
				<h2 class="text-2xl text-green-500">
					Thank you for reaching out, we will get back to you ASAP!
				</h2>
			{:else}
				<BtnSolid buttonText="Submit" />
			{/if}
		</form>
	</div>
</div>
