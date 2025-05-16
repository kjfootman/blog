<script>
	import Menu from '$lib/svelte/menu.svelte';

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
			'bisection method': '/main/numerics/bisection',
			newton: '/main/numerics/newton-method',
			CG: '/',
			GMRES: '/main/numerics/gmres'
		}
	};

	const rust_menu = {
		title: '러스트',
		menuItems: {
			설치하기: '/main/rust/tutorial_01',
			변수선언: '/',
			Chap3: '/'
		}
	};

	let { children } = $props();
</script>

<nav>
  <Menu menu={profile}></Menu>
  <Menu menu={math_menu}></Menu>
  <Menu menu={rust_menu}></Menu>
</nav>

{@render children()}