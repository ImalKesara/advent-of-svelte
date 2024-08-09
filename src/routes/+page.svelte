<script>
	import Footer from '$lib/components/NavAndFooter/Footer.svelte';
	import One from '$lib/components/NumberIcons/One.svelte';
	import Two from '$lib/components/NumberIcons/Two.svelte';
	import Three from '$lib/components/NumberIcons/Three.svelte';
	import Four from '$lib/components/NumberIcons/Four.svelte';
	import Five from '$lib/components/NumberIcons/Five.svelte';
	import Six from '$lib/components/NumberIcons/Six.svelte';
	import Seven from '$lib/components/NumberIcons/Seven.svelte';
	import Eight from '$lib/components/NumberIcons/Eight.svelte';
	import Nine from '$lib/components/NumberIcons/Nine.svelte';
	import Zero from '$lib/components/NumberIcons/Zero.svelte';

	const components = [Zero, One, Two, Three, Four, Five, Six, Seven, Eight, Nine];
	const days = [
		{ day: 1, status: 'Completed', link: './day1' },
		{ day: 2, status: 'Completed', link: './day2' },
		{ day: 3, status: 'Ongoing', link: './day3' },
		{ day: 4, status: 'Pending', link: './day4' },
		{ day: 5, status: 'Pending', link: './day5' },
		{ day: 6, status: 'Pending', link: './day6' },
		{ day: 7, status: 'Pending', link: './day7' },
		{ day: 8, status: 'Pending', link: './day8' },
		{ day: 9, status: 'Pending', link: './day9' },
		{ day: 10, status: 'Pending', link: './day10' },
		{ day: 11, status: 'Pending', link: './day11' },
		{ day: 12, status: 'Pending', link: './day12' },
		{ day: 13, status: 'Pending', link: './day13' },
		{ day: 14, status: 'Pending', link: './day14' },
		{ day: 15, status: 'Pending', link: './day15' },
		{ day: 16, status: 'Pending', link: './day16' },
		{ day: 17, status: 'Pending', link: './day17' },
		{ day: 18, status: 'Pending', link: './day18' },
		{ day: 19, status: 'Pending', link: './day19' },
		{ day: 20, status: 'Pending', link: './day20' },
		{ day: 21, status: 'Pending', link: './day21' },
		{ day: 22, status: 'Pending', link: './day22' },
		{ day: 23, status: 'Pending', link: './day23' },
		{ day: 24, status: 'Pending', link: './day24' }
	];
</script>

<svelte:head>
	<title>24 Days</title>
</svelte:head>

<section class="m-auto flex h-full items-center text-center text-white md:h-screen md:max-w-8xl">
	<div class="grid-col-1 grid p-1 md:grid-cols-4">
		{#each days as day}
			<div class="grid grid-cols-10 items-center border-1 border-bgrey">
				<div class="col-span-4">
					<p class="text-lg font-bold">Day {day.day}</p>
					<p>{day.status}</p>
				</div>
				<div class="col-span-4">
					<a href={day.link}>
						{#if day.day < 10}
							<svelte:component this={components[day.day]} width={100} height={100} />
						{:else}
							<svelte:component
								this={components[Math.floor(day.day / 10)]}
								width={100}
								height={100}
							/>
							<svelte:component this={components[day.day % 10]} width={100} height={100} />
						{/if}
					</a>
				</div>
			</div>
		{/each}
	</div>
</section>
<Footer />

<style lang="postcss">
	a {
		@apply grid grid-cols-2 gap-x-10;
	}
</style>
