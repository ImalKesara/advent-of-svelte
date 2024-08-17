<script lang="ts">
	import { children } from '$lib/stores/daythreeStore';
	import TotalChildren from "../Icon/day Three icons/TotalChildren.svelte";
</script>

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
