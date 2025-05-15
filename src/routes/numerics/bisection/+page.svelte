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

		renderMathInElement(document.querySelector('container'), {
			// customised options
			// • auto-render specific keys, e.g.:
			delimiters: [
				{left: '$$', right: '$$', display: true},
				{left: '$', right: '$', display: false},
				{left: '\\(', right: '\\)', display: false},
				{left: '\\[', right: '\\]', display: true}
			],
			// • rendering keys, e.g.:
			throwOnError : true
		});
	});

</script>

<container>

<h1>Bisection Method</h1>

<p>
	구간 <i>$[a, b]$</i> 에 대하여 <i>${'f(a) * f(b) < 0'}$</i> 일 경우 해를 찾아가는 방법입니다.<br>
	<i>$f(a)$</i> 와 <i>$f(b)$</i> 의 부호가 반대일 경우 구간 <i>$[a, b]$</i> 에서 1개 이상의 해가 존재합니다.<br>
	<i>$a$</i> 와 <i>$b$</i>의 중간 값 <i>$mid$</i> 에 대해 
	<i>$f(mid)$</i> 와 <i>$f(a)$</i> 및 <i>$f(b)$</i>
	의 관계에 따라 반복적으로 a 와 b를 할당 합니다.
</p>

<p>$${String.raw`
	\mathcal{mid} =
	\begin{cases}
		a & \text{if $f(mid) * f(a) < 0$} \\
		b & \text{if $f(mid) * f(b) < 0$} \\
	\end{cases}
`}$$</p>

<p>
	$\begin&#123matrix&#125;
		a & b \\
		c & d \\
	\end&#123;matrix&#125;$
</p>

<pre><code class="language-rust line-numbers">{data.code}</code></pre>
</container>