<script lang="ts">
	import Footer from '$lib/components/NavAndFooter/Footer.svelte';
	import Navbar from '$lib/components/NavAndFooter/Navbar.svelte';
</script>

<Navbar />
<main>
	<slot />
</main>
<Footer />
