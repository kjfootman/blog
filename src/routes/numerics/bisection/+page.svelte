<script>
	import Prism from 'prismjs/components/prism-core';
	import 'prismjs/themes/prism-tomorrow.min.css';
	import 'prismjs/components/prism-rust';
	import 'prismjs/plugins/line-numbers/prism-line-numbers.min.js';
	import 'prismjs/plugins/line-numbers/prism-line-numbers.min.css';

	// import Prism from '@magidoc/plugin-svelte-prismjs';
	// import 'prismjs/components/prism-rust';
	// import 'prismjs/themes/prism-tomorrow.min.css';

	import katex from 'katex';
	import 'katex/dist/katex.min.css';
	import renderMathInElement from 'katex/dist/contrib/auto-render.js';

	import { onMount } from 'svelte';

	const html = katex.renderToString(String.raw`c = \pm\sqrt{a^2 + b^2}`);
	/** @type {HTMLElement} */
	let eq1;
	/** @type {HTMLElement} */
	let eq2;

	// @ts-ignore
	let tmp = Prism.highlight('let x = 3;', Prism.languages.rust, 'rust');

	// console.log(tmp);

	onMount(() => {
		Prism.highlightAll();

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

		renderMathInElement(document.body, {
			// customised options
			// • auto-render specific keys, e.g.:
			delimiters: [
				{left: '$$', right: '$$', display: true},
				{left: '$', right: '$', display: false},
				{left: '\\(', right: '\\)', display: false},
				{left: '\\[', right: '\\]', display: true}
			],
			// • rendering keys, e.g.:
			throwOnError : false
		});
	});

	let { data } = $props();
</script>

<h1>Bisection Method</h1>

<p>
	범위 <span class="katex">$[a, b]$</span> 내에서 <span>$f(a) * f(b) &lt; 0$</span> 일 경우 해를 찾아가는 방법입니다.<br/>
	<span>$a$</span> 와 <span>$b$</span>의 중간 값 <span>$mid$</span> 에 대해
	<span>$f(mid)$</span> 와 <span>$f(a)$</span> 및 <span>$f(b)$</span>
	의 관계에 따라 반복적으로 a 와 b를 할당 합니다.
</p>

<p>$$test$$</p>
<span>$c^2$</span>

<div bind:this={eq1}></div>
<div bind:this={eq2}></div>

<!-- <p>
	<span>
		\\{matrix}
	</span>
</p> -->

<p>
	$\begin&#123matrix&#125;
		a & b \\
		c & d \\
	\end&#123;matrix&#125;$
</p>

{@html html}
<pre><code class="language-rust">
	let mut x = 3;
</code></pre>

<div>
<pre>
	{@html tmp}
</pre>
</div>

<!-- <Prism language={'rust'} source={data.code} showCopyButton={true} showLineNumbers={true} /> -->

<style>
	span {
		line-height: 30px;
	}
</style>