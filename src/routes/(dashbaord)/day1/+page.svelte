<script lang="ts">
	import Close from '$lib/components/Icon/day One icons/Close.svelte';
	import Addbyme from '$lib/components/Icon/day One icons/Addbyme.svelte';
	import NaughtChild from '$lib/components/Icon/day One icons/NaughtChild.svelte';
	import Nicechild from '$lib/components/Icon/day One icons/Nicechild.svelte';
	import Totallogo from '$lib/components/Icon/day One icons/Totallogo.svelte';
	import Add from '$lib/components/Icon/day One icons/Add.svelte';
	import { persons, loadPersons } from '$lib/stores/dayoneStore';
	import { onMount } from 'svelte';
	import Popup from '$lib/components/DayOne/Popup.svelte';
	import Rows from '$lib/components/DayOne/Rows.svelte';
	import Pagination from '$lib/components/DayOne/Pagination.svelte';
	import {
		loadniceChilds,
		loadnaughtChilds,
		findGoodChild,
		findbadChild,
		toggleSideBar
	} from '$lib/utils/dayOne/dayOne';

	let isSideBarShowing: boolean = false;
	let filterName: string = '';
	let filterArray: Persons[];
	let addedByMe: number = 0;
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
	});

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
		$persons = [...$persons, { name: addName, tally: addTally }];
		addedByMe++;
	};
	const paginationIncrease = () => {
		if (currentPage < totalPages) {
			currentPage++;
			front += rowsPerpage;
			rear += rowsPerpage;
		}
	};

	const paginationDecrease = () => {
		if (currentPage > 1) {
			currentPage--;
			front -= rowsPerpage;
			rear -= rowsPerpage;
		}
	};

	const sample = (event: any) => {
		rowsPerpage = event.detail;
		rear = rowsPerpage;
	};

	$: {
		totalPages = Math.ceil($persons.length / rowsPerpage);
		filterArray = $persons
			.filter((person) => {
				if (person.name.toLowerCase().includes(filterName.toLowerCase())) {
					return person.name;
				}
			})
			.slice(front, rear); // currentPage -1 , rowsPerpage
	}
</script>

<Popup {popupMenu} {addName} />

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
				<span class="text-3xl"><b>{$persons.length}</b></span>
				<span class=" block text-sm text-gray-500">Ready For Gifts</span>
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
				<span class="text-3xl"><b>{findGoodChild($persons)}</b></span>
				<span class=" block text-sm text-gray-500">{loadniceChilds($persons)} Are Nice Childs.</span
				>
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
				<span class="text-3xl"><b>{findbadChild($persons)}</b></span>
				<span class=" block text-sm text-gray-500"
					>{loadnaughtChilds($persons)} Are Naughty Childs.</span
				>
			</div>
		</div>

		<!-- column four -->
		<div
			class="grid grid-cols-4 items-center gap-3 rounded-lg border-1 border-bgrey bg-semiBlacked p-5"
		>
			<div class=" col-span-3">Added By You</div>
			<div class=" col-span-1 flex justify-end">
				<Addbyme />
			</div>
			<div class="col-span-3">
				<span class="text-3xl"><b>{addedByMe}</b></span>
				<span class=" block text-sm text-gray-500">Reset On Reload</span>
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
					class=" col-span-4 rounded-full border-1 border-bgrey bg-transparent px-4 py-1 outline-none md:px-5"
					type="text"
					placeholder="Filter name"
				/>
				<div
					class="col-span-2 flex items-center justify-around gap-0 rounded-full border-2 border-dotted border-bgrey px-8 hover:bg-bgrey md:col-span-1 md:px-2"
				>
					<button><Add /></button>
					<span>Tag</span>
				</div>
			</div>
			<div class="flex justify-end">
				<button
					class="rounded-full bg-greenC px-5 py-2"
					on:click={() => {
						isSideBarShowing = toggleSideBar();
					}}>Add Child</button
				>
			</div>
		</div>
		<!-- Rows -->
		<Rows {filterArray} />

		<!-- //pagition -->
		<Pagination
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
		<button
			class="col-span-2 grid cursor-pointer justify-end"
			on:click={() => {
				isSideBarShowing = toggleSideBar();
			}}><Close /></button
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
				on:click={() => {
					addChild();
					popUpFunc();
					isSideBarShowing = toggleSideBar();
				}}>Save Changes</button
			>
		</div>
	</div>
</div>

<style lang="postcss">
	.show {
		@apply opacity-100 transition-all duration-300;
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
