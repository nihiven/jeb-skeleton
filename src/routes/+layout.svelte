<script>
	// order matters
	import '../../src/nihiven.css'; // 1st
	import '@skeletonlabs/skeleton/styles/all.css'; // 2nd
	import '../app.postcss'; // 3rd
	///

	import { AppShell } from '@skeletonlabs/skeleton';
	import TopNav from '../docs/TopNav.svelte';
	import Footer from '../docs/Footer.svelte';
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<TopNav />
	</svelte:fragment>
	<svelte:fragment slot="footer">
		<Footer />
	</svelte:fragment>
	<slot />
</AppShell>
