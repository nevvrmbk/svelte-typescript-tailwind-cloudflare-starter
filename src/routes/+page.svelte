<script lang="ts">
	import Section from '$lib/Section.svelte';
	export let data: any;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<Section>
	<h1 class="text-3xl underline">Welcome to SvelteKit</h1>
	<p class="text-2xl">
		Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
	</p>
	{#if data.ip}
		<p class="text-2xl">Your IP address is: {data.ip}</p>
	{/if}
</Section>
