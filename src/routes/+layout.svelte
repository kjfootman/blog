<script>
	import Menu from "$lib/svelte/menu.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<title>Sloth</title>
</svelte:head>

<header>
	<span class="header-title">Hello Sloth</span>
</header>

<main>
	<nav>
		<Menu menu={{ }}></Menu>
	</nav>
	{@render children()}
</main>

<style>
	:global(body) {
		--header-height: 70px;

		margin: 0;
		padding: 0;
	}

	header {
		width: 100%;
		height: var(--header-height);
		display: flex;
		border-bottom: 1px solid black;
		box-sizing: border-box;
		background-color: beige;
	}

	nav {
		width: 100%;
		background-color: aqua;
		border-right: 1px solid black;
		box-sizing: border-box;
	}

	main {
		--nav-width: 300px;

		width: 100%;
		height: calc(100vh - var(--header-height));
		background-color: aliceblue;
		box-sizing: border-box;

		display: grid;
		grid-template-columns: var(--nav-width) calc(100% - var(--nav-width));
	}

	.header-title {
		display: flex;
		line-height: 100%;
		align-items: center;
		font-weight: bold;

		/* background-color: red; */
	}

</style>