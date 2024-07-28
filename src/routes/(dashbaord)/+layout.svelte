<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<svelte:head>
	<title>Advent Of Svelte | Day 1</title>
</svelte:head>

<div class=" h-screen text-white">
	<Navbar />
	<main>
		<slot />
	</main>
	<Footer />
</div>
