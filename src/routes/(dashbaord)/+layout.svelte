<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<svelte:head>
	<title>Advent Of Svelte | Day 1</title>
</svelte:head>

<div class="m-2 h-screen text-white">
	<Navbar />
	<main>
		<slot />
	</main>
</div>

<style>
</style>
