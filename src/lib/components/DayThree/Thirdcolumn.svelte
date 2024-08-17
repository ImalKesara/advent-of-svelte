<script>
	import { children } from "$lib/stores/daythreeStore";
	import { avgTrips, totalWeight } from "$lib/utils/dayThree/dayThree";
	import Trip from "../Icon/day Three icons/Trip.svelte";

</script>
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