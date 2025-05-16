<script>
	import MenuItem from './menuItem.svelte';

	let { menu } = $props();
	const menuItmes = menu['menuItems'];
</script>

<details open>
	<summary>
		{menu['title']}
	</summary>
	{#each Object.entries(menuItmes) as [title, link]}
		<MenuItem {title} {link}></MenuItem>
	{/each}
</details>

<style>
	details {
		width: 100%;
		font-weight: bold;

		box-sizing: border-box;
	}
</style>
