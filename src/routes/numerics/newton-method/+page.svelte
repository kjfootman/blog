<script>
	import { onMount } from 'svelte';
	import { getFig } from './figure.js';

	import Prism from 'prismjs/components/prism-core';
	import 'prismjs/themes/prism-tomorrow.min.css';
	import 'prismjs/components/prism-rust.js';
	import 'prismjs/plugins/line-numbers/prism-line-numbers.min.js';
	import 'prismjs/plugins/line-numbers/prism-line-numbers.min.css';

	import renderMathInElement from 'katex/dist/contrib/auto-render.js';
	import 'katex/dist/katex.min.css';

	let { data } = $props();

  const fig1 = getFig();

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
    <h2>Newton's Method</h2>
  </section>

  <section>
    <p>
      $y = f(x)$ 의 도함수를 구할 수 있는 경우 기울기를 활용하여 $f(x) = 0$ 의 해를 찾아가는 방법입니다.<br>
      초기 값 $x_0$ 에서 $f(x)$ 에 접하는 직선의 방정식은 $(1)$ 과 같습니다.
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
      $x$ 를 구한 후 이를 초기 값 $x_0$ 로 하여 $(2)$ 에 대입하는 과정을 반복하면 $x$ 가 $f(x) = 0$ 의 해에 근사해 갑니다.
    </p>

    <h3>예제</h3>
    <p>
      아래 예제는 Newton's Method 를 사용하여 $y = x^2 - 2$ 의 해를 찾는 과정입니다.
    </p>

    <div class="fig-center">
      {@html fig1.outerHTML}
    </div>
  </section>

  <section>
    <table style="width: 600px; text-align: center;">
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

  <section style="width: 100%;">
    <pre><code class="language-rust line-numbers">{data.code}</code></pre>
  </section>
</article>
