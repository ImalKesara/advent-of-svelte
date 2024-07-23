<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<div class="text-white h-screen mt-2">
	<Navbar />
	<main>
		<slot />
	</main>
</div>

<style>
</style>
