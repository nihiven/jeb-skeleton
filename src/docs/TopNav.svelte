<script>
	import { AppBar, Avatar, LightSwitch } from '@skeletonlabs/skeleton';
	import { menu } from '@skeletonlabs/skeleton';
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<Avatar
			class="w-10 h-10 mx-2"
			src="https://avatars.githubusercontent.com/u/800509?s=96&v=4"
			alt="Justin Behanna"
			border="rounded"
		/>
		<strong class="text-xl"><a href="/">Justin Behanna</a></strong>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<LightSwitch />
		<span class="divider-vertical h-5" />
		<section class="hidden lg:flex">
			<!-- Resume -->
			<a
				class="unstyled hover:bg-primary-hover-token px-4 py-2 rounded-token"
				href="/resume"
				data-sveltekit-preload-data="hover">Resume</a
			>
			<!-- Projects -->
			<div class="relative">
				<button
					class="unstyled hover:bg-primary-hover-token px-4 py-2 rounded-token space-x-2"
					use:menu={{ menu: 'projects' }}
				>
					<span>Projects</span>
					<i class="fa-solid fa-caret-down opacity-50" />
				</button>
				<div class="card overflow-hidden w-60 shadow-xl grid grid-cols-1" data-menu="projects">
					<!-- Tailwind -->
					<a
						class="block space-y-4 p-4 hover:bg-primary-hover-token"
						href="/elements/core"
						data-sveltekit-preload-data="hover"
					>
						<h4>Tailwind</h4>
						<small>Design tokens and CSS elements.</small>
					</a>
					<hr />
					<!-- Svelte -->
					<a
						class="block space-y-4 p-4 hover:bg-primary-hover-token"
						href="/actions/clipboard"
						data-sveltekit-preload-data="hover"
					>
						<h4>Svelte</h4>
						<small>Actions and Components.</small>
					</a>
					<hr />
					<!-- Utilities -->
					<a
						class="block space-y-4 p-4 hover:bg-primary-hover-token"
						href="/utilities/codeblocks"
						data-sveltekit-preload-data="hover"
					>
						<h4>Utilities</h4>
						<small>Powerful utility features.</small>
					</a>
				</div>
			</div>
			<!-- Blog -->
			<a
				class="unstyled hover:bg-primary-hover-token px-4 py-2 rounded-token"
				href="/blog"
				data-sveltekit-preload-data="hover">Blog</a
			>
		</section>
		<!-- Divider -->
	</svelte:fragment>
</AppBar>
