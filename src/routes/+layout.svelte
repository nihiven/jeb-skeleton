<script>
	import '../../src/nihiven.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import TopNav from '../docs/TopNav.svelte';
	import Footer from '../docs/Footer.svelte';
</script>

<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
	<svelte:fragment slot="header">
		<TopNav />
	</svelte:fragment>
	<svelte:fragment slot="footer">
		<Footer />
	</svelte:fragment>
	<slot />
</AppShell>
