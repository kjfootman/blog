<script>
	import { onMount } from 'svelte';
	// import { getFig } from './figure.js';

	import Prism from 'prismjs/components/prism-core';
	import 'prismjs/themes/prism-tomorrow.min.css';
	import 'prismjs/components/prism-rust.js';
	import 'prismjs/plugins/line-numbers/prism-line-numbers.min.js';
	import 'prismjs/plugins/line-numbers/prism-line-numbers.min.css';

	import renderMathInElement from 'katex/dist/contrib/auto-render.js';
	import 'katex/dist/katex.min.css';

	let { data } = $props();

  onMount(() => {
		Prism.highlightAll();

		renderMathInElement(document.querySelector('article'), {
			// customised options
			// • auto-render specific keys, e.g.:
			delimiters: [
				{left: '$$', right: '$$', display: true},
				{left: '$', right: '$', display: false},
				{left: '\\(', right: '\\)', display: false},
				{left: '\\[', right: '\\]', display: true}
			],
			// • rendering keys, e.g.:
			throwOnError : true,
      output: "html"
      // output: "mathml"
		});
  });

</script>

<article>
  <section>
    <h2 class="title">Secant Method</h2>
  </section>

  <section>
    <p>
      $y = f(x)$ 의 도함수를 구하기 어려울 경우 기울기를 추정하여 $f(x) = 0$ 의 해를 찾아가는 방법입니다.<br>
      <a href="/numerics/newton-method">Newton's Method</a> 와 해를 찾아가는 과정이 동일하지만 정확한 기울기가 아닌 추정값을 이용합니다.<br>
      $${String.raw`
        \begin{equation}
          y = f'(x_0) \cdot (x - x_0) + f(x_0)
        \end{equation}
      `}$$
      $(1)$ 의 해를 구하기 위해 $y$ 에 $0$ 을 대입하고 $x$ 에 대해 정리하면 $(2)$ 와 같습니다.
      $${String.raw`
        \begin{equation}
          x = x_0 - \frac{f(x_0)}{f'(x_0)}
        \end{equation}
      `}$$
      $(2)$ 에서 기울기 $f'(x_0)$ 를 다음과 같이 추정 할 수 있습니다.<br>
      $${String.raw`
        \begin{equation}
          f'(x_0) = \frac{f(x_0) - f(x_{\tiny -1})}{x_0 - x_{\tiny -1}}
        \end{equation}
      `}$$
      $(3)$ 을 $(2)$ 에 대입하면 다음과 같습니다.
      $${String.raw`
        \begin{equation}
          x = x_0 - \frac{f(x_0) \cdot (x_0 - x_{\tiny -1})}{f(x_0) - f(x_{\tiny -1})}
        \end{equation}
      `}$$
      다음 반복을 위하여 ${String.raw`x_{\tiny -1}`}$ 에 $x_0$ 를 대입하고 $x_0$ 에는 $(4)$ 에서 구한 $x$ 를 대입합니다.<br>
      위 과정을 반복하면 $x$ 가 $f(x) = 0$ 의 해에 근해 갑니다.
    </p>
  </section>

  <section>
    <h3 class="subtitle">Example</h3>
    <p>
      아래 예제는 Secant Method 를 사용하여 $y = x^2 - 2$ 의 해를 찾는 과정입니다.<br>
      초기 값 $x_0 = 3.5$ 와 ${String.raw`x_{\tiny -1} = 4.0`}$ 으로 부터 시작해서 $(4)$ 를 반복하여 해를 찾아가 보겠습니다.<br>
    </p>
  </section>

  <section>
    <table>
      <thead>
        <tr>
          {#each data.csv.header as column}
            <th>{column}</th>
          {/each}
        </tr>
      </thead>
      <tbody>
      {#each data.csv.body as row}
        <tr>
          {#each row as column}
            <td>{column}</td>
          {/each}
        </tr>
      {/each}
      </tbody>
    </table>
  </section>

  <section class="code-block">
    <h2 class="subtitle">Source Code</h2>
    <pre><code class="language-rust line-numbers">{data.code}</code></pre>
  </section>
</article>