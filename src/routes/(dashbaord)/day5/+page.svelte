<script lang="ts">
	export let data;
	const sample = data.data;
</script>

{#each sample as sam}
	<h1 class="text-white">{sam.elf}</h1>
{/each}
