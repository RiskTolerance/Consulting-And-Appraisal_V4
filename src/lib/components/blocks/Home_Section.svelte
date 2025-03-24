<script lang="ts">
	import Btn_Solid from '$lib/components/buttons/Btn_Outline.svelte';
	let {
		title,
		body,
		image,
		topMarginClass = 'mt-0',
		bottomMarginClass = 'mb-0'
	}: {
		title: string;
		body: string;
		image: any;
		topMarginClass?: string;
		bottomMarginClass?: string;
	} = $props();
</script>

<div class="w-full px-8">
	<div class="relative container mx-auto my-12 grid grid-cols-2 md:my-16 lg:mb-32 lg:gap-x-12">
		<div
			class="bg-brand-teal-light absolute left-1/2 -z-10 hidden w-32 -translate-x-1/2 lg:block {topMarginClass} {bottomMarginClass}"
		></div>
		<div
			class="flex w-full flex-col justify-center pt-3 sm:w-1/2 sm:pt-0 sm:pl-12 md:pl-16 lg:pl-20"
		>
			<h1 class="text-4xl">{title}</h1>
			<p class="text-sm sm:text-base lg:text-lg">
				{body}
			</p>
			<Btn_Solid></Btn_Solid>
		</div>
		<enhanced:img class="z-10 max-h-96 w-full object-cover lg:w-full" src={image} alt=""
		></enhanced:img>
	</div>
</div>

<!-- <div class="flex flex-col sm:flex-row my-12 md:my-16 lg:mb-32 lg:gap-x-12">
  <div class="relative flex w-full lg:w-1/2">
    <img
      src="/photos/webp/{image}.webp"
      alt=""
      class="z-10 object-cover w-full lg:w-full max-h-96" />
    <div class="bg-teal-500 {tClass} {bClass} w-32 absolute -right-16 hidden lg:block"></div>
  </div>
  <div class="flex flex-col justify-center w-full pt-3 sm:pt-0 sm:w-1/2 sm:pl-12 md:pl-16 lg:pl-20 ">
    <h1 class="text-4xl">{title}</h1>
    <p class="text-sm sm:text-base lg:text-lg">
      {description}
    </p>
    <BtnInline
      text="Visit {title.toLowerCase()} page"
      path="/{title.toLowerCase()}" />
  </div>
</div> -->
