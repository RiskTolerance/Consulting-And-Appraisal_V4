<script lang="ts">
	import type { Picture } from 'imagetools-core';
	import BtnSolid from '$lib/components/buttons/Btn_Solid.svelte';
	let {
		title,
		body,
		btnText,
		btnHref,
		image,
		imageAlt,
		topMarginClass = 'mt-0',
		bottomMarginClass = 'mb-0',
		reverse = false
	}: {
		title: string;
		body: string;
		btnText: string;
		btnHref: string;
		image: Picture;
		imageAlt: string;
		topMarginClass?: string;
		bottomMarginClass?: string;
		reverse: boolean;
	} = $props();
</script>

<div class="w-full px-8 md:px-16">
	<div
		class="relative container mx-auto my-12 grid grid-cols-1 md:my-16 md:grid-cols-2 lg:mb-32 lg:gap-x-12"
	>
		<div
			class="bg-brand-teal-light absolute left-1/2 -z-10 hidden w-32 -translate-x-1/2 lg:block {topMarginClass} {bottomMarginClass}"
		></div>
		<div
			class="{reverse
				? 'order-first md:order-last md:pl-16 lg:pl-20'
				: 'order-first md:pr-16 lg:pr-20'} flex w-full flex-col justify-center gap-8 pt-3 pb-8 sm:pt-0 md:pb-0"
		>
			<h1 class="text-4xl">{title}</h1>
			<p class="text-sm sm:text-base lg:text-lg">
				{body}
			</p>
			<div class="ml-auto">
				<BtnSolid buttonText={btnText} url={btnHref}></BtnSolid>
			</div>
		</div>
		<enhanced:img
			class="{reverse
				? 'order-first'
				: 'order-first md:order-last'} z-10 max-h-96 w-full object-cover lg:w-full"
			src={image}
			alt={imageAlt}
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
