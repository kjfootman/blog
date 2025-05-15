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

<main>
	<nav>
		<Menu menu={profile}></Menu>
		<Menu menu={math_menu}></Menu>
		<Menu menu={rust_menu}></Menu>
	</nav>
	<section>
		{@render children()}
	</section>
</main>

<style>
	:global(body) {
		--header-height: 70px;
		--font-size: 15px;

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
		display: flexbox;
		width: 100%;
		border-right: 1px solid black;
		box-sizing: border-box;

		background-color: antiquewhite;
	}

	main {
		--nav-width: 300px;

		width: 100%;
		height: calc(100vh - var(--header-height));
		box-sizing: border-box;

		display: grid;
		grid-template-columns: var(--nav-width) calc(100% - var(--nav-width));
	}

	section {
		overflow-y: auto;
	}

	.header-title {
		display: flex;
		line-height: 100%;
		align-items: center;
		font-weight: bold;
	}

</style>
