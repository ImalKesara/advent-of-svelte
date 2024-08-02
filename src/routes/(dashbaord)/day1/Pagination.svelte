<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Rightarrow from '$lib/components/Icon/day One icons/Rightarrow.svelte';
	import Leftarrow from '$lib/components/Icon/day One icons/Leftarrow.svelte';
	export let copyPersons;
	export let currentPage: number;
	export let totalPages;
	export let value: number = 10;
	const dispatch = createEventDispatcher();
	let rows: number[] = [10, 20, 30, 40, 50];

	function increase() {
		dispatch('increasePage');
	}

	function decrease() {
		dispatch('decresePage');
	}

	function updateRowsPerPage() {
		dispatch('updateRowsPerPage', value);
	}
</script>

<div class="grid grid-cols-2 gap-5 p-5 md:gap-0">
	<div class="col-span-2 text-center text-sm md:col-span-1 md:text-left">
		Total Children(s): <span class="font-thin">{copyPersons.length}</span>
	</div>
	<div class="col-span-2 grid grid-cols-12 items-center gap-3 text-sm md:col-span-1 md:gap-0">
		<div class=" col-span-12 justify-center md:col-span-6">
			<div class="grid grid-cols-3 items-center">
				<p>Rows per page</p>
				<select
					class=" col-span-2 rounded-md border-1 border-bgrey bg-transparent p-2"
					bind:value
					on:change={updateRowsPerPage}
				>
					{#each rows as row}
						<option value={row}>{row}</option>
					{/each}
				</select>
			</div>
		</div>
		<div class="col-span-12 text-center md:col-span-3">Page {currentPage} of {totalPages}</div>
		<div class="grid grid-cols-2 place-items-center gap-5 md:gap-1">
			<button on:click={decrease}><Leftarrow /></button>
			<button on:click={increase}><Rightarrow /></button>
		</div>
	</div>
</div>
