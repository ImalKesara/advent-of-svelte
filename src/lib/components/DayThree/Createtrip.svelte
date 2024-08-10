<script lang="ts">
	import Weight from '$lib/components/Icon/day Three icons/Weight.svelte';
	import { children } from '$lib/stores/daythreeStore';
	import Add from '../Icon/day One icons/Add.svelte';
	import DeleteThree from '../Icon/day Three icons/DeleteThree.svelte';
	import Accodion from './Accodion.svelte';

	// CreateTrip svelte
	let trip: number = 1;

	let tripCollection: Trips[] = [
		{
			id: 1, //trip === 1
			gifts: []
		}
	];

	const createTrip = () => {
		trip++;
		tripCollection = [...tripCollection, { id: trip, gifts: [] }]; // [{ name: 'kesara', weight: 55 }]
		console.log(tripCollection);
	};

	const addChildren = (name: string, weight: number) => {
		tripCollection[0].gifts.push({ name: name, weight: weight });
		tripCollection = tripCollection;
		$children = $children.filter((child) => child.name !== name);
		console.log(fillerArr);
		console.log($children);
	};

	const delChildren = (name: string) => {
		tripCollection = tripCollection.map((sample) => {
			if (sample.id === 1) {
				return {
					...sample,
					gifts: sample.gifts.filter((delName) => delName.name !== name)
				};
			}
			return sample;
		});
		fillerArr = fillerArr.filter((delName) => delName.name !== name);
	};

	$: fillerArr = tripCollection[0].gifts.filter((info) => {
		return { name: info.name, weight: info.weight };
	});

	$: console.log(fillerArr);
	$: console.log(tripCollection);
</script>

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
						<p>{fillerArr.length} <span> Childs</span></p>
						<span
							>Weight<b> {` ${fillerArr.reduce((accur, curr) => accur + curr.weight, 0)}`} </b>kg
						</span>
					</div>
					<div class="grid gap-y-1">
						<button
							class="w-full rounded-lg bg-orange-500 px-2 py-3"
							on:click={() => {
								console.log(trip.id);
							}}>Update</button
						>
						<button
							class="w-full rounded-lg bg-red-500 px-2 py-3"
							on:click={() => {
								if (tripCollection.length > 1) {
									tripCollection = tripCollection.filter((something) => trip.id !== something.id);
								} else {
									console.log('there must be atleast one trip');
								}
							}}>Delete</button
						>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<div class=" m-auto grid max-w-7xl grid-cols-12 gap-5 p-2">
	<!-- table -->
	<div class=" col-span-6">
		<input type="text" placeholder="Filter name..." class="w-full" />
		<table class="w-full">
			<tr class="">
				<td class="font-bold">Name</td>
				<td class="font-bold">Weight</td>
			</tr>
			{#each $children as child, i}
				<tr>
					<td class=" w-2/4">{child.name}</td>
					<td class=" w-1/4">{child.weight}</td>
					<td class="w-1/4 font-bold text-black"
						><button
							class="flex gap-x-1 rounded-lg bg-greenC px-2 py-3"
							on:click={() => addChildren(child.name, child.weight)}
							><Add fill={'black'} />Add to trip {trip}</button
						></td
					>
				</tr>
			{/each}
		</table>
	</div>

	<!-- accordian -->
	<div class=" col-span-6">
		<Accodion open={true}>
			<span slot="head">Trip {trip}</span>
			<div slot="details">
				<table class="w-full">
					<tr>
						<td>Name</td>
						<td>Weight</td>
						<td>Action</td>
					</tr>

					{#each fillerArr as p}
						<tr>
							<td>{p.name}</td>
							<td>{p.weight}</td>
							<td
								><button
									on:click={() => {
										$children.unshift({ name: p.name, weight: p.weight });
										$children = $children;
										delChildren(p.name);
									}}><DeleteThree /></button
								></td
							>
						</tr>
					{/each}
				</table>
			</div>
		</Accodion>
	</div>
</div>
