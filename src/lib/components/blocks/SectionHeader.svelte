<script lang="ts">
	let {
		title = 'title',
		body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	}: { title: string; body?: string } = $props();
</script>

<!-- background gradient -->
<div
	class="from-brand-light to-brand-teal-light dark:from-brand-teal-light dark:to-brand-teal-dark relative -z-10 min-h-[550px] w-full bg-gradient-to-bl"
>
	<!-- background pattern -->
	<div class="titlecard absolute inset-0">
		<!-- content container (set height for title text) -->
		<div class="md:h-18 absolute top-1/2 h-14 w-full -translate-y-1/2 px-8">
			<div
				class="bg-brand-light dark:bg-brand-dark absolute left-0 top-0 h-full w-3/4 rounded-br-sm rounded-tr-sm"
			></div>
			<div class="container relative mx-auto flex h-full flex-col items-center justify-center">
				<h1 class="text-3xl font-bold md:text-4xl">{title}</h1>
				<p
					class="absolute bottom-0 left-1/2 w-full max-w-[600px] -translate-x-1/2 translate-y-[calc(100%+20px)] text-sm {body.length >
					100
						? 'text-start md:text-lg'
						: 'text-center md:text-xl'}"
				>
					{body}
				</p>
			</div>
		</div>
	</div>
</div>

<style>
	.titlecard {
		height: 100%;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='49.75' viewBox='0 0 100 199'%3E%3Cg fill='%23000000' fill-opacity='0.3'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
		background-repeat: repeat;
		background-size: auto;
		background-position: top left;
		background-blend-mode: overlay; /* Optional: makes pattern blend with gradient */
	}
</style>
