<script>
	import { onMount } from 'svelte';

	// import Prism from 'prismjs';
	import Prism from 'prismjs/components/prism-core';
	// import 'prismjs/components/';
	import 'prismjs/themes/prism-tomorrow.min.css';
	import 'prismjs/components/prism-rust.js';
	import 'prismjs/plugins/line-numbers/prism-line-numbers.min.js';
	import 'prismjs/plugins/line-numbers/prism-line-numbers.min.css';

	import renderMathInElement from 'katex/dist/contrib/auto-render.js';
	import 'katex/dist/katex.min.css';

	let { data } = $props();

	onMount(() => {
		Prism.highlightAll();

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

</script>

<h1>Bisection Method</h1>

<p>
	범위 <span class="tex">$[a, b]$</span> 내에서 <span>$f(a) * f(b) &lt; 0$</span> 일 경우 해를 찾아가는 방법입니다.<br/>
	<span>$a$</span> 와 <span>$b$</span>의 중간 값 <span>$mid$</span> 에 대해
	<span>$f(mid)$</span> 와 <span>$f(a)$</span> 및 <span>$f(b)$</span>
	의 관계에 따라 반복적으로 a 와 b를 할당 합니다.
</p>

<p>$$test$$</p>
<span>$c^2$</span>

<p>
	$\begin&#123matrix&#125;
		a & b \\
		c & d \\
	\end&#123;matrix&#125;$
</p>

<pre><code class="language-rust line-numbers">{data.code}</code></pre>

<style>
	span {
		line-height: 30px;
	}
</style>