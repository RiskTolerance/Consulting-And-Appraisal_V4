<script lang="ts">
	import type { Picture } from 'imagetools-core';

	let { title, image, description }: { title: string; image: Picture; description: string } =
		$props();
</script>

<div class="flex overflow-clip rounded-lg bg-white shadow-lg lg:flex-col">
	<enhanced:img id="hero-image" class="flex h-full w-full lg:h-52 lg:w-full" src={image} alt=""
	></enhanced:img>
	<!-- <div
		id="hero-image"
		class="flex h-full w-full lg:h-52 lg:w-full"
		alt="card img"
		style="background-image: url({img.url});"
	/> -->
	<div class="flex flex-col">
		<h2 class="my-4 flex-grow px-6 text-xl text-gray-900 lg:px-8 lg:text-3xl">
			{title}
		</h2>
		<p class="mb-8 px-6 text-sm text-gray-900 lg:px-8 lg:text-base">
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
