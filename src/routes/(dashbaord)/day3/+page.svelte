<script lang="ts">
	import { onMount } from 'svelte';
	import { children, loadChildren } from '$lib/stores/daythreeStore.ts';

	onMount(() => {
		loadChildren();
	});
</script>

<div class="m-auto mt-24 grid max-w-7xl grid-cols-2 gap-5 p-2 md:grid-cols-4">
	{#each $children as child}
		<div>{`${child.name} ${child.weight}`}</div>
	{/each}
</div>
