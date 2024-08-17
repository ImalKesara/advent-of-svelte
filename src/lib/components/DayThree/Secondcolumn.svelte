<script lang="ts">
	import { children } from '$lib/stores/daythreeStore';
	import { totalWeight } from './../../utils/dayThree/dayThree.ts';
	import Weight from '../Icon/day Three icons/Weight.svelte';
</script>

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
