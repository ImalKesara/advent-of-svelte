<script lang="ts">
	import Weight from '$lib/components/Icon/day Three icons/Weight.svelte';

	// CreateTrip svelte
	export let trip: number = 1;

	export let tripCollection: Trips[] = [
		{
			id: 1, //trip === 1
			gifts: [{ name: 'imal', weight: 45.5 }]
		}
	];
	export const createTrip = () => {
		trip++;
		tripCollection = [...tripCollection, { id: trip, gifts: [] }]; // [{ name: 'kesara', weight: 55 }]
		console.log(tripCollection);
	};
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
			{#each tripCollection as trip, x}
				<div class=" rounded-lg bg-gray-800 p-1 px-2 py-3">
					<div class="flex items-center justify-between">
						<p>Trip {trip.id}</p>
						<Weight />
					</div>
					<div class="">
						<p>0<span>Childs</span></p>
						<span>weight<b>0</b>kg </span>
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
								if (tripCollection.length > 1 ) {
									tripCollection = tripCollection.filter((something) => trip.id !== something.id);
								}else{
									console.log('there must be atleast one trip')
								}
							}}>Delete</button
						>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<div class=" m-auto grid max-w-7xl  gap-5 p-2 grid-cols-12">
	<!-- table -->
	<div class=" col-span-6">
		<input type="text" placeholder="Filter name..." />
		<table>
			<tr>
				<th>Name</th>
				<th>Weight</th>
			</tr>
			<tr>
				{#each tripCollection as some ,i}
					<td>{some.gifts[i].name}</td>
					<td>{some.gifts[i].weight}</td>
				{/each}
			</tr>
		</table>
	</div>

	<!-- accordian -->
	<div class=" col-span-6">Accordian</div>
</div>
