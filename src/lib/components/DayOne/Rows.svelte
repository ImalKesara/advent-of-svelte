<script lang="ts">
	import ChildrenRows from './ChildrenRows.svelte';
	export let filterArray: Persons[];
</script>

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
