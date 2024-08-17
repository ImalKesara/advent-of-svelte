<script lang="ts">
	import Firstcolumn from './Firstcolumn.svelte';
	import Secondcolumn from './Secondcolumn.svelte';
	import Thirdcolumn from './Thirdcolumn.svelte';
	import Fourthcolumn from './Fourthcolumn.svelte';
</script>

<div class="m-auto mt-24 grid max-w-7xl grid-cols-2 gap-5 p-2 md:grid-cols-4">
	<!-- column one -->
	<Firstcolumn />
	<!-- column two -->
	<Secondcolumn />
	<!-- column three -->
	<Thirdcolumn />
	<!-- column four -->
	<Fourthcolumn />
</div>
