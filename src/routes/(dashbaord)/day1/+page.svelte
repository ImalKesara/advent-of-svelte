<script lang="ts">
	import Addbyme from '$lib/components/Icon/Addbyme.svelte';
	import NaughtChild from '$lib/components/Icon/NaughtChild.svelte';
	import Nicechild from '$lib/components/Icon/Nicechild.svelte';
	import Totallogo from '$lib/components/Icon/Totallogo.svelte';
	import Add from '$lib/components/Icon/Add.svelte';
	import { persons, loadPersons } from '$lib/stores/dayoneStore';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import ChildrenRows from './ChildrenRows.svelte';

	let niceChildren: number = 0;
	let naughtyChildren: number = 0;
	let nicestChild: string;
	let naughtChild: string;
	let filterName: string = '';
	let copyPersons: Persons[] = [];
	let filterArray: Persons[];

	onMount(() => {
		loadPersons();
		loadniceChilds();
		loadnaughtChilds();
		getSmallestandLargest();
		copyPersons = get(persons);
	});

	//gets all the good childrens
	const loadniceChilds = () => {
		$persons.forEach((person) => {
			if (person.tally > 0) {
				niceChildren++;
			}
		});
	};

	//gets all the naughty childrens
	const loadnaughtChilds = () => {
		$persons.forEach((person) => {
			if (person.tally < 0) {
				naughtyChildren++;
			}
		});
	};

	const getSmallestandLargest = () => {
		let smallest: number = $persons[1].tally;
		let largest: number = $persons[1].tally;

		$persons.forEach((person) => {
			if (person.tally >= largest) {
				largest = person.tally;
				nicestChild = person.name;
			}
			if (person.tally <= smallest) {
				smallest = person.tally;
				naughtChild = person.name;
			}
		});
	};

	$: {
		filterArray = copyPersons.filter((person) => {
			if (person.name.includes(filterName)) {
				return person.name;
			}
		});
	}

	console.log(copyPersons);
</script>

<div class="m-auto mt-24 grid max-w-7xl grid-cols-4 gap-5">
	<!-- column one -->
	<div
		class="grid grid-cols-4 items-center gap-3 rounded-lg border-1 border-bgrey bg-semiBlacked p-5"
	>
		<div class=" col-span-3">Total Childs</div>
		<div class=" col-span-1 flex justify-end">
			<Totallogo />
		</div>
		<div class="col-span-3">
			<span class="text-3xl"><b>{$persons.length}</b></span>
			<span class=" block text-sm text-gray-500">Ready for Gifts</span>
		</div>
	</div>

	<!-- column two -->
	<div
		class="grid grid-cols-4 items-center gap-3 rounded-lg border-1 border-bgrey bg-semiBlacked p-5"
	>
		<div class=" col-span-3">Nicest Child</div>
		<div class=" col-span-1 flex justify-end">
			<Nicechild />
		</div>
		<div class="col-span-3">
			<span class="text-3xl"><b>{nicestChild}</b></span>
			<span class=" block text-sm text-gray-500">{niceChildren} are nice childs.</span>
		</div>
	</div>

	<!-- colmun three -->
	<div
		class="grid grid-cols-4 items-center gap-3 rounded-lg border-1 border-bgrey bg-semiBlacked p-5"
	>
		<div class=" col-span-3">Naughtiest Child</div>
		<div class=" col-span-1 flex justify-end">
			<NaughtChild />
		</div>
		<div class="col-span-3">
			<span class="text-3xl"><b>{naughtChild}</b></span>
			<span class=" block text-sm text-gray-500">{naughtyChildren} are naughty childs.</span>
		</div>
	</div>

	<!-- column four -->
	<div
		class="grid grid-cols-4 items-center gap-3 rounded-lg border-1 border-bgrey bg-semiBlacked p-5"
	>
		<div class=" col-span-3">Added by You</div>
		<div class=" col-span-1 flex justify-end">
			<Addbyme />
		</div>
		<div class="col-span-3">
			<span class="text-3xl"><b>0</b></span>
			<span class=" block text-sm text-gray-500">Reset on Reload</span>
		</div>
	</div>
</div>

<!-- table -->
<div class="m-auto my-5 max-w-7xl items-center rounded-lg border-1 border-bgrey">
	<!-- filter and add child button -->
	<div class="grid grid-cols-2 p-5">
		<div class="grid grid-cols-6 gap-2">
			<input
				bind:value={filterName}
				class=" col-span-4 rounded-full border-1 border-bgrey bg-transparent px-5 py-1 outline-none"
				type="text"
				placeholder="Filter name"
			/>
			<div
				class="col-span-1 flex items-center justify-around gap-0 rounded-full border-2 border-dotted border-bgrey px-2 hover:bg-bgrey"
			>
				<button
					on:click={() => {
						console.log('noice');
					}}><Add /></button
				>
				<span>Tag</span>
			</div>
		</div>
		<div class="flex justify-end">
			<button class="rounded-full bg-greenC px-5 py-2">Add child</button>
		</div>
	</div>
	<!-- Rows -->
	<table class="w-full">
		<tr>
			<td class="p-3"><b>No</b></td>
			<td class="p-3"><b>Name</b></td>
			<td class="p-3"><b>Tally</b></td>
			<td class="p-3"><b>Tag</b></td>
		</tr>
		{#each filterArray as person, i}
			<tr class=" border-t-[0.5px] border-bgrey">
				<ChildrenRows {person} {i} />
			</tr>
		{/each}
	</table>
</div>
