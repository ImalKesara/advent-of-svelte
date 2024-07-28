<script lang="ts">
	import Close from '$lib/components/Icon/Close.svelte';
	import Addbyme from '$lib/components/Icon/Addbyme.svelte';
	import NaughtChild from '$lib/components/Icon/NaughtChild.svelte';
	import Nicechild from '$lib/components/Icon/Nicechild.svelte';
	import Totallogo from '$lib/components/Icon/Totallogo.svelte';
	import Add from '$lib/components/Icon/Add.svelte';
	import { persons, loadPersons } from '$lib/stores/dayoneStore';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import ChildrenRows from './ChildrenRows.svelte';
	import Pagination from './Pagination.svelte';
	import Done from '$lib/components/Icon/Done.svelte';
	import Empty from '$lib/components/Icon/Empty.svelte';

	let niceChildren: number = 0;
	let naughtyChildren: number = 0;
	let nicestChild: string;
	let naughtChild: string;
	let filterName: string = '';
	let copyPersons: Persons[] = [];
	let filterArray: Persons[];
	let addedByMe: number = 0;
	let isSideBarShowing: boolean = false;
	let popupMenu: boolean = false;
	let addName: string = 'Arthur Mogan';
	let addTally: number = 69;
	let currentPage: number = 1;
	let totalPages: number;
	let front: number = 0;
	let rowsPerpage: number = 10; //dynamic value default 10
	let rear: number = rowsPerpage; //dynamic value

	onMount(() => {
		loadPersons();
		copyPersons = get(persons);
		updateAll();
	});

	//gets all the good childrens
	const loadniceChilds = () => {
		niceChildren = 0;
		copyPersons.forEach((person) => {
			if (person.tally > 0) {
				niceChildren++;
			}
			return;
		});
	};

	//gets all the naughty childrens
	const loadnaughtChilds = () => {
		naughtyChildren = 0;
		copyPersons.forEach((person) => {
			if (person.tally < 0) {
				naughtyChildren++;
			}
			return;
		});
	};

	const getSmallestandLargest = () => {
		let smallest: number = copyPersons[1].tally;
		let largest: number = copyPersons[1].tally;

		copyPersons.forEach((person) => {
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

	const updateAll = () => {
		loadniceChilds();
		loadnaughtChilds();
		getSmallestandLargest();
	};

	const toggleSideBar = () => {
		isSideBarShowing = !isSideBarShowing;
	};

	const popUpFunc = () => {
		popupMenu = true;
		setTimeout(() => {
			popupMenu = false;
		}, 3000);
	};

	const addChild = () => {
		if (addName === '') {
			return;
		}
		copyPersons = [...copyPersons, { name: addName, tally: addTally }];
		addedByMe++;
		updateAll();
	};
	const paginationIncrease = () => {
		currentPage++;
		front += rowsPerpage;
		rear += rowsPerpage;
		console.log(front, rear);
	};

	const paginationDecrease = () => {
		currentPage--;
		front -= rowsPerpage;
		rear -= rowsPerpage;
		console.log(front, rear);
	};

	const sample = (event: any) => {
		rowsPerpage = event.detail;
		rear = rowsPerpage;
	};

	$: {
		totalPages = Math.ceil(copyPersons.length / rowsPerpage);
		filterArray = copyPersons
			.filter((person) => {
				if (person.name.toLowerCase().includes(filterName.toLowerCase())) {
					return person.name;
				}
			})
			.slice(front, rear); // currentPage -1 , rowsPerpage
	}
</script>

<div class={isSideBarShowing ? 'blur' : ''}>
	<div class="m-auto mt-24 grid max-w-7xl grid-cols-2 gap-5 p-2 md:grid-cols-4">
		<!-- column one -->
		<div
			class="grid grid-cols-4 items-center gap-3 rounded-lg border-1 border-bgrey bg-semiBlacked p-5"
		>
			<div class=" col-span-3">Total Childs</div>
			<div class=" col-span-1 flex justify-end">
				<Totallogo />
			</div>
			<div class="col-span-3">
				<span class="text-3xl"><b>{copyPersons.length}</b></span>
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
				<span class="text-3xl"><b>{addedByMe}</b></span>
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
				<button class="rounded-full bg-greenC px-5 py-2" on:click={toggleSideBar}>Add child</button>
			</div>
		</div>
		<!-- Rows -->
		<table class="w-full">
			<tr>
				<td class="w-1/5 p-3"><b>No</b></td>
				<td class="w-2/5 p-3"><b>Name</b></td>
				<td class="w-1/5 p-3"><b>Tally</b></td>
				<td class="w-1/5 p-3"><b>Tag</b></td>
			</tr>
			{#each filterArray as person, i}
				<tr class=" border-t-[0.5px] border-bgrey hover:bg-bgrey">
					<ChildrenRows {person} {i} />
				</tr>
			{/each}
		</table>

		<!-- //pagition -->
		<Pagination
			{copyPersons}
			{currentPage}
			{totalPages}
			on:updateRowsPerPage={sample}
			on:increasePage={paginationIncrease}
			on:decresePage={paginationDecrease}
		/>
	</div>
</div>

<div
	class="  fixed right-0 top-0 z-10 h-screen w-96 border-l-1 border-gray-700 bg-semiBlacked p-5 opacity-0 {isSideBarShowing
		? 'show'
		: 'hide'}"
>
	<div class="container relative grid grid-cols-2 gap-4">
		<button class="col-span-2 grid cursor-pointer justify-end" on:click={toggleSideBar}
			><Close /></button
		>
		<p class="col-span-2">Add Child</p>
		<p class="col-span-2">
			As this system is new to you, we are going explain to you, how to use it. This is a simple
			form you add name and tally of child, and it will save it on system.
		</p>
		<div class="col-span-2">
			<span>Name</span>
			<input
				required
				class=" h-8 w-full rounded-lg border-1 border-bgrey bg-transparent px-2 py-3 outline outline-green-500 focus:outline-green-400"
				type="text"
				placeholder="Name"
				bind:value={addName}
			/>
		</div>
		<div class="col-span-2">
			<span>Tally</span>
			<input
				required
				class=" h-8 w-full rounded-lg border-1 border-bgrey bg-transparent px-2 py-3 outline-none focus:outline-green-400"
				type="text"
				placeholder="Tally"
				bind:value={addTally}
			/>
		</div>
		<div class="col-span-2 grid justify-end">
			<button
				class=" cursor-pointer rounded-full bg-greenC px-5 py-2"
				on:click={addChild}
				on:click={popUpFunc}
				on:click={toggleSideBar}>Save Changes</button
			>
		</div>
	</div>
</div>

<div
	class=" duration-800 flex items-center justify-center opacity-0 transition-transform {popupMenu
		? 'sample'
		: ''}"
>
	<div
		class="fixed top-0 mt-10 flex items-center justify-center gap-1 rounded-md bg-white px-5 py-2 text-center"
	>
		{#if addName === ''}
			<p><Empty /></p>
			<p class="text-red-500">Text field is empty</p>
		{:else}
			<p><Done width={32} height={32} /></p>
			<p class="text-green-500">Successfully added {addName}</p>
		{/if}
	</div>
</div>

<style lang="postcss">
	.sample {
		opacity: 1;
		transform: -translateY(0);
		transition:
			opacity 0.5s ease-in,
			transform 0.5s ease-in;
	}
	.show {
		@apply transition-all duration-300;
		opacity: 1;
		transform: translateX(0);
		transition:
			opacity 0.6s ease,
			transform 0.6s ease;
	}

	.hide {
		opacity: 0;
		transform: translateX(100%);
		transition:
			opacity 0.6s ease,
			transform 0.6s ease;
	}
	.blur {
		filter: blur(10px);
		transition: filter 0.5s ease;
	}
</style>
