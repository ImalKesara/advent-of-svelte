<script lang="ts">
	import Fourtabs from '$lib/components/DayThree/Fourtabs.svelte';
	import Weight from '$lib/components/Icon/day Three icons/Weight.svelte';
	import { children, loadChildren } from '$lib/stores/daythreeStore';
	import { onMount } from 'svelte';

	onMount(() => {
		loadChildren();
	});

	export let trip :number = 1

	interface Gifts {
		name: string;
		weight: number;
	}

	interface Trips {
		id: number;
		gifts: Gifts[];
	}

	let tripCollection: Trips[] = [
		{
			id: 1, //trip === 1
			gifts: [{ name: 'imal', weight: 45.5 }]
		}
	];
	const createTrip = () => {
		trip++;
		tripCollection = [...tripCollection, { id: trip, gifts: [{ name: 'kesara', weight: 55 }] }];
		console.log(trip)
		console.log(tripCollection);

	};
</script>

<Fourtabs />
<div class="m-auto grid max-w-7xl grid-cols-2 gap-5 p-2 md:grid-cols-12">
	<div class=" col-span-3">
		<div class=" rounded-lg bg-bgrey px-5 py-10">
			<button class="w-full rounded-lg bg-greenC px-2 py-3" on:click={createTrip}
				>Create Trip</button
			>
			<p class="text-center">Trip</p>
			<button class="w-full rounded-lg bg-slate-500 px-2 py-3">Solve it System !!!</button>
		</div>
	</div>
	<div class="col-span-9">
		<div class="grid grid-cols-3 rounded-lg bg-bgrey px-5 py-10">
			<!-- repeatition part -->
			{#each tripCollection as trip}
				<div class=" rounded-lg bg-gray-800 p-1 px-2 py-3">
					<div class="flex items-center justify-between">
						<p>Trip {trip.id}</p>
						<Weight />
					</div>
					<div class="">
						<p>0 <span>Childs</span></p>
						<span>weight <b>0</b>kg </span>
					</div>
					<div class="grid gap-y-1">
						<button class="w-full rounded-lg bg-orange-500 px-2 py-3">Update</button>
						<button class="w-full rounded-lg bg-red-500 px-2 py-3">Delete</button>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
