<script>
	import MenuItem from './menuItem.svelte';

	let { menu, isOpen } = $props();
	const menuItmes = menu['menuItems'];
</script>

<details bind:open={isOpen}>
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
		margin: 15px auto;
		box-sizing: border-box;
		padding: 0px 10px;

		cursor: pointer;
	}
</style>
