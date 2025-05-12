<script>
	import Prism from '@magidoc/plugin-svelte-prismjs';
	import 'prismjs/components/prism-rust';
	import 'prismjs/themes/prism-tomorrow.min.css';

	import katex from 'katex';
	import 'katex/dist/katex.min.css';
  // import 'katex/dist/contrib/auto-render.js'

	import { onMount } from 'svelte';

	const html = katex.renderToString(String.raw`c = \pm\sqrt{a^2 + b^2}`);
	/** @type {HTMLElement} */
	let eq1;
	/** @type {HTMLElement} */
	let eq2;

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

<span>
	범위 
  {@html katex.renderToString(String.raw`[a, b]`, {
    throwOnError: false
  })} 에서 
  {@html katex.renderToString(String.raw`f(a) * f(b) < 0`, {
    throwOnError: false
  })} 일 경우 해를 찾아가는 방법입니다.<br/>
  {@html katex.renderToString(String.raw`a`, {
    throwOnError: false
  })} 와
  {@html katex.renderToString(String.raw`b`, {
    throwOnError: false
  })} 의 중간 값 
  {@html katex.renderToString(String`mid`, {
    throwOnError: false
  })} 에 대해 
  {@html katex.renderToString(String.raw`f(mid)`, {
    throwOnError: false
  })} 의 조건에 따라 반복적으로 a 또는 b를 할당 합니다.
</span><br/>
<span>

</span>

<div bind:this={eq1}></div>
<div bind:this={eq2}></div>

{@html html}

<Prism language={'rust'} source={data.code} showCopyButton={true} showLineNumbers={true} />

<p>{data.code}</p>

<style>
	span {
		line-height: 30px;
	}
</style>