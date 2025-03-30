<script lang="ts">
	let { title, img, description }: { title: string; img: string; description: string } = $props();
</script>

<div class="flex overflow-clip rounded-lg bg-white shadow-lg lg:flex-col">
	<div
		id="hero-image"
		class="flex h-full w-full lg:h-52 lg:w-full"
		style="background-image: url({img});"
	></div>
	<div class="flex flex-col">
		<h2 class="my-4 flex-grow px-6 text-xl lg:px-8 lg:text-3xl">
			{title}
		</h2>
		<p class="mb-8 px-6 text-sm lg:px-8 lg:text-base">
			{description}
		</p>
	</div>
</div>

<style>
	#hero-image {
		min-width: 8rem;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: 50% 60%;
	}
</style>
