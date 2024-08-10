<script lang="ts">
	import Createtrip from '$lib/components/DayThree/Createtrip.svelte';
	import Fourtabs from '$lib/components/DayThree/Fourtabs.svelte';
	import CreatedTrip from '$lib/components/Icon/day Three icons/CreatedTrip.svelte';

	import { children, loadChildren } from '$lib/stores/daythreeStore';
	import { onMount } from 'svelte';

	onMount(() => {
		loadChildren();
	});
</script>

<Fourtabs />
<Createtrip />
