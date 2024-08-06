<script lang="ts">
	import Done from '$lib/components/Icon/day One icons/Done.svelte';
	import Empty from '$lib/components/Icon/day One icons/Empty.svelte';
	export let popupMenu: boolean;
	export let addName: string;
</script>

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
</style>
