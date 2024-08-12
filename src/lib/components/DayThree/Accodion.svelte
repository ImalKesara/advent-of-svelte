<script lang="ts">
	export let open = false;
	import { slide } from 'svelte/transition';
	const handleClick = () => open = !open
</script>

<div class="accordion">
	<div class="header flex justify-between px-1">
		<div class="text  hover:underline">
			<slot name="head"></slot>
		</div>

		<button on:click={handleClick}>+</button>
	</div>
	{#if open}
		<div class="details" transition:slide>
			<slot name="details"></slot>
		</div>
	{/if}
</div>
