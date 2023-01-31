<script>
	import { storeLightSwitch } from '@skeletonlabs/skeleton';
</script>

<footer
	class="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800"
>
	<span class="text-gray-500 sm:text-center dark:text-gray-400">
		Built with
		<a href="https://svelte.dev/" class="hover:underline">Svelte</a> and
		<a href="https://tailwindcss.com/" class="hover:underline">Tailwind.</a>
	</span>
	<span class="divider-vertical visible md:invisible sm:text-center" />
	<span class="text-center">
		{#if $storeLightSwitch}
			<a href="https://www.youtube.com/watch?v=MFQS7kOCwoI" class="hover:underline">🐵</a>
		{:else}
			😎
		{/if}
	</span>
	<span class="divider-vertical visible md:invisible sm:text-center" />
	<span>
		<a href="https://github.com/nihiven/jeb-skeleton sm:text-center" class="hover:underline mx-1"
			>Source</a
		>
		<span class="divider-vertical h-2" />
		<a href="https://twitter.com/nihiven" class="hover:underline mx-1">Twitter</a>
		<span class="divider-vertical h-2" />
		<a href="https://www.linkedin.com/in/justin-behanna/" class="hover:underline mx-1">LinkedIn</a>
		<span class="divider-vertical h-2" />
		<a href="https://last.fm/user/b0x" class="hover:underline mx-1">Last.fm</a>
	</span>
</footer>
