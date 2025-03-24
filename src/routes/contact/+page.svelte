<script lang="ts">
	import SectionHeader from '$lib/components/blocks/SectionHeader.svelte';
	import BtnSolid from '$lib/components/buttons/Btn_Solid.svelte';
	let { name, email } = $state({ name: '', email: '' });
</script>

<SectionHeader title="Contact Us" body="Get in touch with us!"></SectionHeader>

<div class="sectionMarginX -mt-16 mb-16">
	<form
		class="bg-brand-light dark:bg-brand-teal-med flex w-full flex-col items-center space-y-4 rounded-sm px-10 py-6 shadow-lg lg:px-20 lg:py-14"
	>
		<h1 class="w-full text-3xl font-bold">Send Us A Message</h1>
		<p class="w-full">
			We would love to hear from you! Use the form below to send us a message. Alternitively, you
			can send us a good ol' fashioned email, give us a call, or connect with us on social media.
		</p>
		<div class="flex w-full flex-col items-start space-y-5 lg:flex-row lg:space-y-0 lg:space-x-5">
			<div>
				<label for="email">Name:</label>
				<input
					class="border-brand-teal-med w-full rounded-sm border-2 px-5 py-3"
					type="text"
					bind:value={name}
				/>
			</div>

			<div>
				<label for="email">Email:</label>
				<input
					class="border-brand-teal-med w-full rounded-sm border-2 px-5 py-3"
					type="text"
					bind:value={email}
				/>
			</div>

			<div class="flex space-x-2 lg:self-end">
				<label for="email">Subscribe to our newsletter?</label>
				<input type="checkbox" />
			</div>
		</div>

		<div
			class="flex w-full flex-col items-end space-y-5 space-x-0 lg:flex-row lg:space-y-0 lg:space-x-5"
		>
			<textarea
				class="border-brand-teal-med w-full rounded-sm border-2 px-5 py-3"
				name=""
				id=""
				cols="30"
				rows="10"
			></textarea>
		</div>
		<div class="flex w-full justify-end">
			<BtnSolid buttonText="Submit" />
		</div>
	</form>
</div>
