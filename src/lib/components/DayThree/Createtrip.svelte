<script lang="ts">
	import Weight from '$lib/components/Icon/day Three icons/Weight.svelte';
	import { children } from '$lib/stores/daythreeStore';
	import Add from '../Icon/day One icons/Add.svelte';
	import Leftarrow from '../Icon/day One icons/Leftarrow.svelte';
	import Rightarrow from '../Icon/day One icons/Rightarrow.svelte';
	import DeleteThree from '../Icon/day Three icons/DeleteThree.svelte';
	import Accodion from './Accodion.svelte';

	// CreateTrip svelte
	let tripId: number = 1;
	let index: number = 0;
	let filterName: string = '';
	let perRowspage: number = 10;
	let filterChild: any[] = [];
	let totalPages: number;

	let tripCollection: Trips[] = [
		//index is 0
		{
			id: 1, //trip === 1
			gifts: []
		}
	];

	const createTrip = () => {
		tripId++;
		tripCollection = [...tripCollection, { id: tripId, gifts: [] }]; // [{ name: 'kesara', weight: 55 }]
	};

	const addChildren = (name: string, weight: number) => {
		let total = tripCollection[index].gifts.reduce((accu, curr) => accu + curr.weight, 0);
		if (total < 100) {
			tripCollection[index].gifts.push({ name: name, weight: weight });
			tripCollection = tripCollection;
			$children = $children.filter((child) => child.name !== name);
			console.log(total);
		} else {
			return;
		}
	};

	const delChildren = (name: string) => {
		tripCollection = tripCollection.map((sample) => {
			if (sample.id === tripId) {
				return {
					...sample,
					gifts: sample.gifts.filter((delName) => delName.name !== name)
				};
			}
			return sample;
		});
		fillerArr = fillerArr.filter((delName) => delName.name !== name);
	};

	//for table
	$: {
		totalPages = Math.ceil($children.length / perRowspage);
		console.log('Total pages', totalPages);
		filterChild = $children
			.filter((child) => {
				if (child.name.toLowerCase().includes(filterName)) {
					return child.name;
				}
			})
			.slice(0, 10);
	}

	//for accordion
	$: fillerArr = tripCollection[index].gifts.filter((info) => {
		return { name: info.name, weight: info.weight };
	});
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
		<div class="grid grid-cols-3 gap-x-5 gap-y-3 rounded-lg">
			<!-- repeatition part -->
			{#each tripCollection as trip}
				<div class=" rounded-lg bg-bgrey px-4 py-7">
					<div class="flex items-center justify-between">
						<p>Trip {trip.id}</p>
						<Weight />
					</div>
					<div>
						<p><span class="text-3xl"> {trip.gifts.length} </span>Child(s)</p>
						<p class="text-sm leading-5">
							Weight : <b>
								{trip.gifts.reduce((accur, curr) => accur + curr.weight, 0).toFixed(2)}
							</b>Kg
						</p>
					</div>
					<div class="mt-3 grid grid-cols-2 gap-x-1">
						<button
							class="w-full rounded-full bg-orange-500 px-2 py-3"
							on:click={() => {
								console.log(trip.id);
								index = tripCollection.findIndex((acc) => acc.id === trip.id);
							}}>Update</button
						>
						<button
							class="w-full rounded-full bg-red-500 px-2 py-3"
							on:click={() => {
								if (tripCollection.length > 1) {
									console.log(trip.id);
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
	<div class=" col-span-6 rounded-lg border-1 border-bgrey p-5">
		<input
			type="text"
			placeholder="Filter name..."
			class="w-full rounded-full border-1 border-bgrey bg-transparent px-4 py-3 outline-none"
			bind:value={filterName}
		/>
		<table class="w-full">
			<tr class="text-lg">
				<td class="font-bold">Name</td>
				<td class="font-bold">Weight</td>
			</tr>
			{#each filterChild as child}
				<tr class="border-b-[0.5px] border-bgrey">
					<td class=" w-2/4">{child.name}</td>
					<td class=" w-1/4">{child.weight}</td>
					<td class="w-1/4 font-bold text-white"
						><button
							class="flex gap-x-1 rounded-lg bg-greenC px-2 py-3"
							on:click={() => addChildren(child.name, child.weight)}
							><Add fill={'white'} />Add To Trip {tripCollection[index].id}</button
						></td
					>
				</tr>
			{/each}
		</table>
		<div class="mt-5 grid grid-cols-4 justify-items-center">
			<div>Total child(s) : {$children.length}</div>
			<div>Rows per page</div>
			<div>
				<p>page {1} of {totalPages}</p>
			</div>
			<div>
				<button><Leftarrow /></button>
				<button><Rightarrow /></button>
			</div>
		</div>
	</div>

	<!-- accordian -->
	<div class="col-span-6 rounded-lg border-1 border-bgrey p-5">
		{#each tripCollection as collection}
			<Accodion open={true}>
				<span slot="head">Trip {collection.id} </span>
				<span slot="total"
					>Total {collection.gifts.reduce((accu, curr) => accu + curr.weight, 0).toFixed(2)} Kg</span
				>
				<div slot="details">
					<table class="w-full">
						<tr class="text-lg">
							<td class=" w-2/3">Name</td>
							<td>Weight</td>
							<td class=" text-end">Action</td>
						</tr>
						{#each collection.gifts as p}
							<tr class="border-b-[0.5px] border-bgrey">
								<td>{p.name}</td>
								<td>{p.weight}</td>
								<td class="flex justify-end"
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
		{/each}
	</div>
</div>

<style>
	td {
		@apply px-1 py-2;
	}
</style>
