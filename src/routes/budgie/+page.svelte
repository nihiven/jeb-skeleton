<script>
	import { onMount } from 'svelte';
	import { getBudgieData } from './budgie_service';

	let budgieData;
	onMount(async () => {
		const res = await getBudgieData('version');
		budgieData = res.json();
		console.log(budgieData);
	});
</script>
