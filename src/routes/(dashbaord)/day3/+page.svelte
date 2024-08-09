<script lang="ts">
	import Fourtabs from '$lib/components/DayThree/Fourtabs.svelte';
	import { children, loadChildren } from '$lib/stores/daythreeStore.ts';
	import { onMount } from 'svelte';

	onMount(() => {
		loadChildren();
	});
</script>

<Fourtabs />
