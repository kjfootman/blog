<script>
	import MenuItem from './menuItem.svelte';

	let { menu, isOpen } = $props();
	const menuItmes = menu['menuItems'];

	// function menu_open() {
	// 	if (window.innerWidth < 800) {
	// 		isOpen = false;
	// 	} else {
	// 		isOpen = true;
	// 	}
	// }
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
	}
</style>
