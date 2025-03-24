<script lang="ts">
	let { title, description }: { title: string; description: string } = $props();
</script>

<div
	class="bg-brand-teal-med hover:bg-brand-teal-dark text-brand-light flex flex-col items-center rounded-sm px-10 py-12 duration-300"
>
	<h2 class="mb-3 text-xl font-bold lg:mb-4 lg:text-2xl">
		{title}
	</h2>
	<p class="text-sm lg:text-base">
		{description}
	</p>
</div>
