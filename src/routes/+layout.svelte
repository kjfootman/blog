<script>
	import Menu from '$lib/svelte/menu.svelte';

	let menuOpen = $state(true);
	let { children } = $props();

	const profile = {
		title: 'My Profile',
		menuItems: {
			profile: '/profile',
		}
	};

	const math_menu = {
		title: '수치해석',
		menuItems: {
			"Bisection Method": '/numerics/bisection-method',
			"Newton's Method": '/numerics/newton-method',
			"Secant Method": '/numerics/secant-method',
			"Backward Euler Method": '/numerics/backward-euler-method',
			"2nd Order ODE": '/numerics/2nd-order-ode',
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

<svelte:window onresize={(e) => {
	if (window.innerWidth < 800) {
		menuOpen = false;
	} else {
		menuOpen = true;
	}
}}></svelte:window>

<header>
	<span class="header-title">Hello Sloth</span>
</header>

<nav>
	<Menu menu={profile} isOpen={menuOpen}></Menu>
	<Menu menu={math_menu} isOpen={menuOpen}></Menu>
	<Menu menu={rust_menu} isOpen={menuOpen}></Menu>
</nav>

<main>
	{@render children()}
</main>


<style>
	@import '$lib/css/article-style.css';

	:global(*, body) {
		--header-height: 70px;
		--nav-width: 300px;

		box-sizing: border-box;

		margin: 0;
		padding: 0;
	}

	:global(body) {
		display: grid;
		font-size: 16px;

		grid-template-rows: var(--header-height) calc(100% - var(--header-height)) ;
		grid-template-columns: var(--nav-width) calc(100% - var(--nav-width));
		height: 100vh;
	}


	header {
		width: 100%;
		height: var(--header-height);
		display: flex;
		border-bottom: 1px solid black;
		background-color: beige;
		grid-column: 1 / 3;

	}

	nav {
		display: flexbox;
		width: var(--nav-width);
		border-right: 1px solid black;
		border-bottom: 1px solid black;
	}

	main {
		width: 100%;
		overflow-y: auto;
	}

	/* section {
		width: 100%;
		height: 100%;
		overflow-y: auto;
	} */

	.header-title {
		display: flex;
		line-height: 100%;
		align-items: center;
		font-weight: bold;
	}

	@media (max-width: 800px) {
		:global(body) {
			display: block;
			width: 100%;
		}

		nav {
			width: 100%;
		}
	}
</style>
