<script>
	import { storeLightSwitch } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

	export let turnLightsOffIcon = '🌙';
	export let turnLightsOnIcon = '🌞';

	let lightSwitch = $storeLightSwitch;

	onMount(() => {
		storeLightSwitch.subscribe((value) => {
			lightSwitch = value;
		});
	});

	function toggleLightSwitch() {
		storeLightSwitch.update((value) => !value);
		setElemHtmlClass();
	}

	// Toggles a 'dark' class on the <html> element
	function setElemHtmlClass() {
		const elemHtmlClassList = document.documentElement.classList;
		// Update HTML element class
		$storeLightSwitch ? elemHtmlClassList.add('dark') : elemHtmlClassList.remove('dark');
	}
</script>

{#if lightSwitch}
	<span
		class="cursor-pointer"
		title="Toggle {$storeLightSwitch ? 'Light' : 'Dark'} Mode"
		aria-label="Toggle Lights"
		on:click|preventDefault={toggleLightSwitch}
		on:keydown|preventDefault={toggleLightSwitch}
	>
		{turnLightsOnIcon}
	</span>
{:else}
	<span
		class="cursor-pointer"
		aria-label="Toggle Lights"
		title="Toggle {$storeLightSwitch ? 'Light' : 'Dark'} Mode"
		on:click|preventDefault={toggleLightSwitch}
		on:keydown|preventDefault={toggleLightSwitch}
	>
		{turnLightsOffIcon}
	</span>
{/if}
