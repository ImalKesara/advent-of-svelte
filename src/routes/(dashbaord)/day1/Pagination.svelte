<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Rightarrow from '$lib/components/Icon/Rightarrow.svelte';
	import Leftarrow from '$lib/components/Icon/Leftarrow.svelte';
	export let copyPersons;
	export let currentPage: number;
	export let totalPages;
	const dispatch = createEventDispatcher();

	function increase() {
		dispatch('increasePage');
	}
	function decrease() {
		dispatch('decresePage');
	}
</script>

<div class="grid grid-cols-2 border-1 p-5">
	<div class="text-sm">
		Total Children(s): <span class="font-thin">{copyPersons.length}</span>
	</div>
	<div class="grid grid-cols-12 items-center justify-center border-1 text-sm">
		<div class=" col-span-4">Rows per page</div>
		<div class=" col-span-4">Page {currentPage} of {totalPages}</div>
		<div class=" grid grid-cols-2">
			<button on:click={decrease}><Leftarrow /></button>
			<button on:click={increase}><Rightarrow /></button>
		</div>
	</div>
</div>
