<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<svelte:head>
	<title>Day 2-Cookie Counter</title>
</svelte:head>

<div class="text-white">
	<Navbar />
	<main>
		<slot />
	</main>
	<Footer />
</div>
