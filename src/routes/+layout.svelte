<script>
	import '../../src/nihiven.postcss';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';
</script>

<!-- App Shell -->
<svelte:head>
	<title>jb.com</title>
</svelte:head>

<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl">Justin Behanna</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch />
				<a
					class="btn btn-sm btn-ghost-surface"
					href="https://twitter.com/nihiven"
					target="_blank"
					rel="noreferrer">Twitter</a
				>
				<a
					class="btn btn-sm btn-ghost-surface"
					href="https://github.com/nihiven"
					target="_blank"
					rel="noreferrer">GitHub</a
				>
				<a
					class="btn btn-sm btn-ghost-surface"
					href="https://last.fm/user/b0x"
					target="_blank"
					rel="noreferrer">Last.fm</a
				>
				<a
					class="btn btn-sm btn-ghost-surface"
					href="https://www.linkedin.com/in/justin-behanna/"
					target="_blank"
					rel="noreferrer">LinkedIn</a
				>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
