<script>
	import Darkmode from './Icon/Darkmode.svelte';
	import Github from './Icon/Github.svelte';
	import SvelteLogo from './Icon/SvelteLogo.svelte';
</script>

<header>
	<div class="grid max-w-8xl m-auto grid-cols-2 items-center p-5 border-1 border-bgrey rounded-lg">
		<div class="grid grid-cols-10 items-center">
			<a class=" col-span-1" href="#"><SvelteLogo width={34} height={34} /></a>
			<p class=" col-span-7">Advent of svelte</p>
		</div>
		<nav>
			<ul class="grid grid-cols-10">
				<li class="col-start-9 col-end-9 items-center">
					<a class="" href="#"><Github width={32} height={32} /></a>
				</li>
				<li><a href="#"><Darkmode width={32} height={32} /> </a></li>
			</ul>
		</nav>
	</div>
</header>

<style>
</style>
