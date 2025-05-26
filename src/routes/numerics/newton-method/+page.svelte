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

  const fig1 = getFig(3.5, 2.0357);
  const fig2 = getFig(2.0357, 1.5091);

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
    <h2 class="title">Newton's Method</h2>
  </section>

  <section>
    <p>
      $y = f(x)$ 의 도함수를 알고 있는 경우 기울기를 이용하여 $f(x) = 0$ 의 해를 찾아가는 방법입니다.<br>
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

    <h3 class="subtitle">예제</h3>
    <p>
      아래 예제는 Newton's Method 를 사용하여 $y = x^2 - 2$ 의 해를 찾는 과정입니다.<br>
      초기 값 $x_0 = 3.5$ 로 하여 $(2)$ 에 대입하면 $Fig.1$ 과 같이 $x \approx 2.0357$ 를 얻을 수 있습니다.<br>
    </p>

    <div class="fig-center">
      {@html fig1.outerHTML}
    </div>

    <p>
      $x$ 를 $x_0$ 에 할당하고 $(2)$ 에 대입하면 $Fig.2$ 와 같이 $x \approx 1.5091$ 를 얻을 수 있습니다.<br>
    </p>

    <div class="fig-center">
      {@html fig2.outerHTML}
    </div>

    <p>위 과정을 반복하면 아래 표와 같이 $x$ 가 $\sqrt{2}$ 에 근사해 가는것을 확인 할 수 있습니다.</p>
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
