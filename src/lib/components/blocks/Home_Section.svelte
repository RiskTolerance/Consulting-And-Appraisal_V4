<script lang="ts">
	let { title, body, image }: { title: string; body: string; image: any } = $props();
</script>

<div class="w-full px-8">
	<div class="relative container mx-auto grid grid-cols-2 gap-8">
		<div class="bg-brand-teal-light absolute left-1/2 h-3/4 w-10 -translate-x-1/2">
			<p>divider</p>
		</div>
		<div class="prose">
			<h2>{title}</h2>
			<p>{body}</p>
		</div>
		<enhanced:img class="h-full min-h-[350px] object-cover" src={image} alt=""></enhanced:img>
	</div>
</div>
