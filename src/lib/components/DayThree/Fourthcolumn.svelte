<script>
	import { createtrip } from '$lib/stores/daythreeStore';

	import CreatedTrip from '../Icon/day Three icons/CreatedTrip.svelte';
</script>

<div
	class="grid grid-cols-4 items-center gap-3 rounded-lg border-1 border-bgrey bg-semiBlacked p-5"
>
	<div class=" col-span-3">Trips Created</div>
	<div class=" col-span-1 flex justify-end">
		<CreatedTrip />
	</div>
	<div class="col-span-3">
		<span class="text-3xl"><b>{$createtrip} </b></span>
		<span class=" block text-sm text-gray-500">Trips created by you</span>
	</div>
</div>
