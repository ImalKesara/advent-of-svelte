<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Rightarrow from '$lib/components/Icon/Rightarrow.svelte';
	import Leftarrow from '$lib/components/Icon/Leftarrow.svelte';
	export let copyPersons;
	export let currentPage: number;
	export let totalPages;
	let value: number = 10;
	const dispatch = createEventDispatcher();
	let rows: number[] = [10, 20, 30, 40, 50];
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
		<div class=" col-span-4">
			<p>Rows per page</p>
			<select bind:value>
				{#each rows as row}
					<option value={row}>{row}</option>
				{/each}
			</select>
		</div>
		<div class=" col-span-4">Page {currentPage} of {totalPages}</div>
		<div class=" grid grid-cols-2">
			<button on:click={decrease}><Leftarrow /></button>
			<button on:click={increase}><Rightarrow /></button>
		</div>
	</div>
</div>
