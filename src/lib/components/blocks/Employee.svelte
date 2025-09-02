<script lang="ts">
	import { Collapsible } from 'bits-ui';
	import SanityImage from '$lib/components/SanityImage.svelte';
	import { PortableText } from '@portabletext/svelte';

	let { employee } = $props();
	let isOpen = $state(false);
</script>

<div
	class="outline-brand-teal-light mx-auto flex h-fit w-full max-w-[300px] flex-col gap-4 rounded-md p-6 outline-2"
>
	<div class="flex items-center gap-4">
		<div class="aspect-square h-[100px] overflow-clip rounded-full">
			<SanityImage img={employee.img} imgAlt={employee.imageAlt} loaded={false} width={300}
			></SanityImage>
		</div>
		<h3 class="text-xl font-bold">{employee.name}</h3>
	</div>

	<Collapsible.Root class="flex flex-col items-end gap-4" bind:open={isOpen}>
		<Collapsible.Trigger>
			<p>{isOpen ? 'Close Bio' : 'Read Bio'}</p>
		</Collapsible.Trigger>
		<Collapsible.Content>
			<p>{employee.title}</p>
			<PortableText value={employee.bio}></PortableText>
		</Collapsible.Content>
	</Collapsible.Root>
</div>
