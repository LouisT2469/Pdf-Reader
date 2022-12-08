<script lang="ts">
	import Aufzeichnungen from '$lib/aufzeichnungen.svelte';
	import { onMount } from 'svelte';
	onMount(() => {
		window.addEventListener('keydown', (e) => {
			if (e.key === 'z') {
				e.preventDefault();
				alert('codet von: Zero 🖤');
			}
		});
		window.addEventListener('keydown', (e) => {
			if (e.key === 'l') {
				e.preventDefault();
				alert('codet von: Louis T.🕊');
			}
		});
	});
</script>

<svelte:head>
	<title>Vertretungsplan</title>
</svelte:head>

<Aufzeichnungen />
