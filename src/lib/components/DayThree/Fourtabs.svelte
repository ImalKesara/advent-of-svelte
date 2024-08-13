<script lang="ts">
	import { children } from '$lib/stores/daythreeStore.ts';
	import Trip from '$lib/components/Icon/day Three icons/Trip.svelte';
	import TotalChildren from '$lib/components/Icon/day Three icons/TotalChildren.svelte';
	import CreatedTrip from '$lib/components/Icon/day Three icons/CreatedTrip.svelte';
	import Weight from '$lib/components/Icon/day Three icons/Weight.svelte';
	import { totalWeight, avgTrips } from '$lib/utils/dayThree/dayThree';
	import { onMount } from 'svelte';


</script>

<div class="m-auto mt-24 grid max-w-7xl grid-cols-2 gap-5 p-2 md:grid-cols-4">
	<!-- column one -->
	<div
		class="grid grid-cols-4 items-center gap-3 rounded-lg border-1 border-bgrey bg-semiBlacked p-5"
	>
		<div class=" col-span-3">Total Children</div>
		<div class=" col-span-1 flex justify-end">
			<TotalChildren />
		</div>
		<div class="col-span-3">
			<span class="text-3xl"><b>{$children.length}</b></span>
			<span class=" block text-sm text-gray-500">Children waiting for gifts.</span>
		</div>
	</div>
	<!-- column two -->
	<div
		class="grid grid-cols-4 items-center gap-3 rounded-lg border-1 border-bgrey bg-semiBlacked p-5"
	>
		<div class=" col-span-3">Total Weight</div>
		<div class=" col-span-1 flex justify-end">
			<Weight />
		</div>
		<div class="col-span-4">
			<span class="text-3xl"><b>{totalWeight($children).toFixed(2)}</b></span>
			<span class=" block text-sm text-gray-500"> Total Weight of gifts for the children.</span>
		</div>
	</div>

	<!-- column three -->
	<div
		class="grid grid-cols-4 items-center gap-3 rounded-lg border-1 border-bgrey bg-semiBlacked p-5"
	>
		<div class=" col-span-3">Average Trips</div>
		<div class=" col-span-1 flex justify-end">
			<Trip />
		</div>
		<div class="col-span-3">
			<span class="text-3xl"><b>{avgTrips(totalWeight($children))}</b></span>
			<span class=" block text-sm text-gray-500">System calculated.</span>
		</div>
	</div>

	<!-- column four -->
	<div
		class="grid grid-cols-4 items-center gap-3 rounded-lg border-1 border-bgrey bg-semiBlacked p-5"
	>
		<div class=" col-span-3">Trips Created</div>
		<div class=" col-span-1 flex justify-end">
			<CreatedTrip />
		</div>
		<div class="col-span-3">
			<span class="text-3xl"><b>{1} </b></span>
			<span class=" block text-sm text-gray-500">Trips created by you</span>
		</div>
	</div>
</div>
