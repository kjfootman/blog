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

  /** @type {import('./$types.js').PageProps }*/
	let { data } = $props();

  const fig1 = getFig(2.1333, 3.5, 4.0);
  const fig2 = getFig(1.6805, 2.1333, 3.5);

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
    <h2 class="title">$\S$ Secant Method</h2>
  </section>

  <section>
    <p>
      $y = f(x)$ 의 도함수를 구하기 어려울 경우 기울기를 추정하여 $f(x) = 0$ 의 해를 찾아가는 방법입니다.
      <a href="/numerics/newton-method">Newton's Method</a> 와 해를 찾아가는 과정이 동일하지만 정확한 기울기가 아닌 추정값을 이용합니다.<br>
    </p>
    <p>
      $x_0$ 에서 접선의 방적식은 $(1)$ 과 같습니다.

      $${String.raw`
        \begin{equation}
          y = f'(x_0) \cdot (x - x_0) + f(x_0)
        \end{equation}
      `}$$

      $(1)$ 의 해를 구하기 위해 $y$ 에 $0$ 을 대입하고 정리하면 $(2)$ 와 같습니다.
      
      $${String.raw`
        \begin{equation}
          x = x_0 - \frac{f(x_0)}{f'(x_0)}
        \end{equation}
      `}$$
    </p>
    <p>
      여기 까지는 Newtown's Method 와 동일합니다. 
      Secant Method 에서는 기울기 $f'(x_0)$ 를 $(3)$ 과 같이 근사화 합니다.

      $${String.raw`
        \begin{equation}
          f'(x_0) = \frac{f(x_0) - f(x_{\tiny -1})}{x_0 - x_{\tiny -1}}
        \end{equation}
      `}$$

      ${String.raw`x_{\tiny -1}`}$ 은 $x_0$ 전단계의 $x$ 값으로써, 
      초기 값은 ${String.raw`x_{\tiny -1} \ne x_0`}$ 를 만족하는 임의의 값을 사용합니다.

      $(3)$ 을 $(2)$ 에 대입하고 정리 하면 $(4)$ 와 같습니다.

      $${String.raw`
        \begin{equation}
          x = x_0 - \frac{f(x_0) \cdot (x_0 - x_{\tiny -1})}{f(x_0) - f(x_{\tiny -1})}
        \end{equation}
      `}$$

      $(4)$ 에 ${String.raw`x_{\tiny -1}`}$ 와 $x_0$ 를 각각 대입하여 $x$ 를 구합니다.
      다음 반복을 위하여 ${String.raw`x_{\tiny -1}`}$ 에 $x_0$ 의 값을 할당하고 $x_0$ 에는 $x$ 를 할당합니다.<br>
    </p>
    <p>
      위 과정을 반복 하면 $x$ 가 $f(x) = 0$ 의 해에 근사해 갑니다.
    </p>
  </section>

  <section>
    <h3 class="subtitle">Example</h3>
    <p>
      아래 예제는 Secant Method 를 사용하여 $y = x^2 - 2$ 의 해를 찾는 과정입니다.
      초기 값 $x_0 = 3.5$ 와 ${String.raw`x_{\tiny -1} = 4.0`}$ 으로 부터 시작해서 $(4)$ 를 반복하여 해를 찾아가 보겠습니다.<br>
    </p>

    <p>
      $(4)$ 에 초기 값 $x_0$ 와 ${String.raw`x_{\tiny -1}`}$ 를 대입하면 Fig.1 과 같이 $x \approx 2.1333$ 를 얻을 수 있습니다.<br>
    </p>

    <div class="fig-center">
      {@html fig1.outerHTML}
    </div>

    <p>
      ${String.raw`x_{\tiny -1}`}$ 에 $3.5$ 를 할당하고, 
      $x_0$ 에는 $2.1333$ 을 할당하여 다음 반복을 수행합니다.

      위에서 구한 $x_0$ 와 ${String.raw`x_{\tiny -1}`}$ 를 
      $(4)$ 에 대입하면 Fig.2 와 같이 $x \approx 1.6805$ 를 얻을 수 있습니다.
    </p>

    <div class="fig-center">
      {@html fig2.outerHTML}
    </div>
    <p>
      다시 ${String.raw`x_{\tiny -1}`}$ 에 $2.1333$ 을 할당하고, $x_0$ 에는 $1.6805$ 을 할당하여 위 과정을 반복합니다.
      반복을 진행하면 아래 표와 같이 $x$ 가 $\sqrt{2}$ 에 근사해 가는 것을 확인할 수 있습니다.
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