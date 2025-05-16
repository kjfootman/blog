<script>
	import Menu from '$lib/svelte/menu.svelte';

	let { children } = $props();

	const profile = {
		title: 'My Profile',
		menuItems: {
			pfofile: '/',
			projects: '/'
		}
	};

	const math_menu = {
		title: '수치해석',
		menuItems: {
			'bisection method': '/numerics/bisection',
			newton: '/numerics/newton-method',
			CG: '/',
			GMRES: '/numerics/gmres'
		}
	};
	const rust_menu = {
		title: '러스트',
		menuItems: {
			설치하기: '/rust/tutorial_01',
			변수선언: '/',
			Chap3: '/'
		}
	};
</script>

<svelte:head>
	<title>Sloth</title>
</svelte:head>

<header>
	<span class="header-title">Hello Sloth</span>
</header>

<nav>
	<Menu menu={profile}></Menu>
	<Menu menu={math_menu}></Menu>
	<Menu menu={rust_menu}></Menu>
</nav>

<main>
	{@render children()}
</main>


<style>
	:global(*, body) {
		--header-height: 70px;
		--font-size: 15px;
		--nav-width: 300px;

		margin: 0;
		padding: 0;
	}

	:global(body) {
		display: grid;

		grid-template-rows: var(--header-height) calc(100% - var(--header-height)) ;
		grid-template-columns: var(--nav-width) calc(100% - var(--nav-width));
		box-sizing: border-box;
		height: 100vh;
	}

	header {
		width: 100%;
		height: var(--header-height);
		display: flex;
		border-bottom: 1px solid black;
		background-color: beige;
		grid-column: 1 / 3;

		box-sizing: border-box;
	}

	nav {
		display: flexbox;
		width: var(--nav-width);
		/* height: calc(100vh - var(--header-height)); */
		border-right: 1px solid black;
		box-sizing: border-box;

		background-color: aliceblue;
		/* background-color: antiquewhite; */
	}

	main {
		width: 100%;
		box-sizing: border-box;
		overflow-y: hidden;
	}

	.header-title {
		display: flex;
		line-height: 100%;
		align-items: center;
		font-weight: bold;
	}


	.block {
		width: 100%;
		height: 100%;
		background-color: red;

		border: 1px solid black;
		grid-column: 1 / 3;
	}

</style>
