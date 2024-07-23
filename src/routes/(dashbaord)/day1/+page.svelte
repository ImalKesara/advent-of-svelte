<script lang="ts">
	import Addbyme from '$lib/components/Icon/Addbyme.svelte';
	import NaughtChild from '$lib/components/Icon/NaughtChild.svelte';
	import Nicechild from '$lib/components/Icon/Nicechild.svelte';
	import Totallogo from '$lib/components/Icon/Totallogo.svelte';
	import { persons, loadPersons } from '$lib/stores/dayoneStore';
	import { onMount } from 'svelte';
	import ChildrenRows from './ChildrenRows.svelte';

	let niceChildren: number = 0;
	let naughtyChildren: number = 0;
	let nicestChild: string;
	let naughtChild: string;

	onMount(() => {
		loadPersons();
		loadniceChilds();
		loadnaughtChilds();
		getSmallestandLargest();
		// loadniceChildName();
		// getNicestAndNaughtchild();
		getSmallestandLargest();
	});

	//gets all the good childrens
	const loadniceChilds = () => {
		$persons.filter((person) => {
			if (person.tally > 0) {
				niceChildren++;
			}
		});
	};
	//gets all the naughty childrens
	const loadnaughtChilds = () => {
		$persons.filter((person) => {
			if (person.tally < 0) {
				naughtyChildren++;
			}
		});
	};

	// const loadniceChildName = () => {
	// 	$persons = $persons.sort((a, b) => a.tally - b.tally);
	// };

	// const getNicestAndNaughtchild = () => {
	// 	nicestChild = $persons[$persons.length - 1].name;
	// 	naughtChild = $persons[0].name;
	// };

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
</script>

<div class="m-auto mt-10 grid max-w-7xl grid-cols-4 gap-5">
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
<div class=" m-auto my-5 max-w-7xl">
	<!-- filter and add child button -->
	<div></div>
	<!-- Rows -->
	<table class=" w-full">
		<tr class="border-1 border-bgrey">
			<td class="p-3">Name</td>
			<td class="p-3">Tally</td>
			<td class="p-3">Tag</td>
		</tr>
		{#each $persons as person}
			<tr class="border-1 border-bgrey">
				<ChildrenRows {person} />
			</tr>
		{/each}
	</table>
</div>
