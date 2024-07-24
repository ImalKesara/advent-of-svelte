<script lang="ts">
	export let copyPersons;
</script>

<div class="grid grid-cols-2 p-5">
	<div class="text-sm">
		Total Children(s): <span class=" font-thin">{copyPersons.length}</span>
	</div>
	<div class="grid grid-cols-12 text-sm">
		<div class=" col-span-4">Rows per page</div>
		<div class=" col-span-4">Page 1 of 10</div>
		<div class=" col-span-4"></div>
	</div>
</div>
