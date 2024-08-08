<script lang="ts">
	import Footer from '$lib/components/NavAndFooter/Footer.svelte';
	import Navbar from '$lib/components/NavAndFooter/Navbar.svelte';
</script>

<svelte:head>
	<title>Day 1-Naughty or Nice</title>
</svelte:head>

<div class=" h-screen text-white">
	<Navbar />
	<main>
		<slot />
	</main>
	<Footer />
</div>
