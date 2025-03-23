<script lang="ts">
	import { Twitter, Facebook, Linkedin } from '@lucide/svelte';
</script>

<div id="side-social-links" class="fixed top-2/3 right-0 translate-y-1/2 max-lg:hidden">
	<ul class="bg-teal-dark flex w-12 flex-col items-center gap-3 rounded-tl-md rounded-bl-md py-4">
		<li>
			<a href="/"><Twitter class="stroke-white hover:scale-105"></Twitter></a>
		</li>
		<li><a href="/"><Facebook class="stroke-white hover:scale-105"></Facebook></a></li>
		<li><a href="/"><Linkedin class="stroke-white hover:scale-105"></Linkedin></a></li>
	</ul>
</div>
