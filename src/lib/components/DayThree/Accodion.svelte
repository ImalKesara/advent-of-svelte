<script lang="ts">
	export let open = false;
	import { slide } from 'svelte/transition';
	import UpArrow from '../Icon/day Three icons/UpArrow.svelte';
	import DownArrow from '../Icon/day Three icons/DownArrow.svelte';
	const handleClick = () => (open = !open);
</script>

<div class="accordion border-1 border-bgrey p-5">
	<div class="header flex justify-between px-1">
		<div class="text hover:underline">
			<slot name="head"></slot>
		</div>
		<div class="text-sm">
			<slot name="total"></slot>
		</div>

		<button on:click={handleClick}>
			{#if open}
				<UpArrow />
			{:else}
				<DownArrow />
			{/if}
		</button>
	</div>
	{#if open}
		<div class="details" transition:slide>
			<slot name="details"></slot>
		</div>
	{/if}
</div>
