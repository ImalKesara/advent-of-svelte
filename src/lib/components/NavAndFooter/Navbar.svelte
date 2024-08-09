<script lang="ts">
	import Darkmode from '../Icon/day One icons/Darkmode.svelte';
	import Github from '../Icon/day One icons/Github.svelte';
	import SvelteLogo from '../Icon/day One icons/SvelteLogo.svelte';
	export let visible: boolean = false;
	const darkmode = () => {
		visible = !visible;
	};
</script>

<header class="fixed  left-0 top-0 m-1 w-full shadow-md backdrop-blur-lg backdrop-filter">
	<div
		class="m-auto grid max-w-8xl grid-cols-1 items-center rounded-lg border-1 border-bgrey p-5 md:grid-cols-2"
	>
		<div class="grid grid-cols-12 items-center gap-x-12 md:grid-cols-10">
			<a class=" col-span-1 grid justify-items-center md:col-span-1" href="./"
				><SvelteLogo width={34} height={34} /></a
			>
			<p class="col-span-5 font-bold">Advent of Svelte</p>
		</div>
		<nav class="hidden md:block">
			<ul class="grid grid-cols-10">
				<li class="col-start-9 col-end-9 items-center">
					<a class="" href="https://github.com/ImalKesara/advent-of-svelte"
						><Github width={32} height={32} /></a
					>
				</li>
				<li>
					<button on:click={darkmode}><Darkmode width={32} height={32} /> </button>
				</li>
			</ul>
		</nav>
	</div>
</header>
