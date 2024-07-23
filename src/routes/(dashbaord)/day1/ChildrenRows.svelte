<script lang="ts">
	export let person;
</script>

<td class=" p-3">{person.name}</td>
<td class=" p-3">{person.tally}</td>
<td class=" p-3">{person.tally > 0 ? 'Nice' : ' Naught'}</td>
