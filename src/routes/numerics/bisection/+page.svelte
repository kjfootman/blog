<script>
    import Prism from 'prismjs';
    import 'prismjs/components/';
	import 'prismjs/themes/prism.css';
	// import 'prismjs/themes/prism-tomorrow.css';
	import 'prismjs/themes/prism-dark.css';

	import katex from 'katex';
	import 'katex/dist/katex.min.css';

	import { onMount } from 'svelte';

	const html = katex.renderToString(String.raw`c = \pm\sqrt{a^2 + b^2}`);
	/** @type {HTMLElement} */
	let eq1;
	/** @type {HTMLElement} */
	let eq2;

    const code = `let data = 1`;

    /** @type {string} */
    // @ts-ignore
    let test = Prism.highlight(code, Prism.languages.javascript, 'rust')

	onMount(() => {

		katex.render(
			String.raw`
                \mathcal{mid} =
                \begin{cases}
                    a & \text{if $f(mid) * f(a) < 0$} \\
                    b & \text{if $f(mid) * f(b) < 0$} \\
                \end{cases}
            `,
			eq1,
			{ throwOnError: false }
		);
		katex.render(
			String.raw`
				\begin{matrix}
					a & b \\
					c & d \\
				\end{matrix}
            `,
			eq2,
			{ throwOnError: false }
		);
	});

	let { data } = $props();
</script>

<h1>Bisection Method</h1>

{@html '<h1>test</h1>'}
<pre><code class=language-rust>let x = 3;</code></pre>

<span>
	범위 [a, b]<span>test</span>에서 f(a) * f(b) &#60; 0 일 경우 해를 찾아가는 방법입니다.<br />
	a와 b의 중간 값 mid = 0.5 * (a + b)에 대해 f(a) * f(mid) &#60; 0 일 경우 b = mid
</span><br />

<!-- <Katex>ax^2+bx+c=0</Katex> -->
{@html html}

<!-- <br><span bind:this={eq1}></span> -->
<div bind:this={eq1}></div>
<div bind:this={eq2}></div>

<!-- <Prism language={'rust'} source={data.code} showCopyButton={true} showLineNumbers={true} /> -->

<!-- <style>
    .text {
        display: block;
    }
</style> -->
