<script>
  import Prism from '@magidoc/plugin-svelte-prismjs';
  import 'prismjs/components/prism-rust';
  // import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js';
  import 'prismjs/themes/prism-tomorrow.min.css';

  import katex from 'katex';
  import 'katex/dist/katex.min.css';

  import { onMount } from 'svelte';

  const html = katex.renderToString(String.raw`c = \pm\sqrt{a^2 + b^2}`);

  /** @type {HTMLElement} */
  let eq1;

  /** @type {HTMLElement} */
  let eq2;

  let test = katex.renderToString(String.raw`c = \pm\sqrt{a^2 + b^2}`, {
    output: 'html'
  });

  onMount(() => {
    katex.render(
      String.raw`
        \mathcal{mid} =
        \begin{cases}
            a & \text{if $f(mid) * f(a) < 0$} \\
            b & \text{if $f(mid) * f(b) < 0$} \\
        \end{cases}`,
      eq1,
      { throwOnError: false }
    );
    katex.render(
      String.raw`
        \begin{matrix}
          a & b \\
          c & d \\
        \end{matrix}`,
      eq2,
      { throwOnError: false }
    );
    // katex.render(
    // 	String.raw`
    // 		\begin{matrix}
    // 			a & b & e \\
    // 			c & d & f\\
    // 		\end{matrix}
        //     `,
    // 	eq3,
    // 	{ throwOnError: false }
    // );
  });

  let { data } = $props();
</script>

<h1>Bisection Method</h1>

{@html '<h1>test</h1>'}

<span>
  범위 [a, b]{@html katex.renderToString(String.raw`\pm`)}에서 f(a) * f(b) &#60; 0 일 경우 해를 찾아가는 방법입니다.<br />
  a와 b의 중간 값 mid = 0.5 * (a + b)에 대해 f(a) * f(mid) &#60; 0 일 경우 b = mid
</span><br />

{@html html}

<div bind:this={eq1}></div>
<div bind:this={eq2}></div>
<!-- <div bind:this={eq3}></div> -->

<Prism language={'rust'} source={data.code} showCopyButton={true} showLineNumbers={true} />

{@html test}

<div>
{@html katex.renderToString(String.raw`c = \pm`)}
</div>