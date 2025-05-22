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

  const fig1 = getFig(0.5, 3.5, 101);
  const fig2 = getFig(0.5, 2.0, 101);

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
    <h2>Bisection Method</h2>
  </section>

  <section>
    <p>
      구간 <i>$[\;a,\;b\;]$</i> 에 대하여 <i>$f(a) \cdot f(b) {'<'} 0$</i> 일 경우,
      방정식 <i>$f(x) = 0$</i> 의 해를 찾아가는 반복법 입니다.<br>
      <i>$f(a)$</i> 와 <i>$f(b)$</i> 의 부호가 서로 반대일 경우
      <i>$[\;a,\;b\;]$</i> 내에서 반드시 1개 이상의 해가 존재합니다.<br>
    </p>
    <p>
      <i>$a$</i> 와 <i>$b$</i>의 중간 값 <i>$mid$</i> 에 대하여,<br>
      <i>$f(mid)$</i> 와 <i>$f(a)$</i> 의 부호가 서로 반대일 경우 <i>$b$</i> 에 <i>$mid$</i> 를 할당 하고,<br>
      <i>$f(mid)$</i> 와 <i>$f(b)$</i> 의 부호가 서로 반대일 경우 <i>$a$</i> 에 <i>$mid$</i> 를 할당 합니다.<br>

      $${String.raw`
        \begin{equation}
        \begin{cases}
          \space b = mid & \text{if}\enspace f(mid) \cdot f(a) < 0 \\
          \space a = mid & \text{if}\enspace f(mid) \cdot f(b) < 0 \\
        \end{cases}
        \end{equation}
      `}$$

      위 방법을 반복하면 <i>$mid$</i> 가 해에 수렴해 갑니다.
    </p>
  </section>

  <section>
    <h2>예제</h2>
    <p>
      아래 예제는 Bisection Method 를 사용하여 구간 $[\;0.5,\; 3.5\;]$ 에서 $y = x^2 - 2$ 의 해를 찾는 과정 입니다.<br>
      $a$ 가 $0.5$ 이고 $b$ 가 $3.5$ 이므로 중간 값 $mid$ 은 $2.0$ 입니다.
    </p>

    <div class="fig-center">
      {@html fig1.outerHTML}
    </div>

    <p>
      $(1)$ 을 적용하면 $f(a)$ 와 $f(mid)$ 의 부호가 서로 반대이기 때문에
      $a$ 는 기존 값 $0.5$ 를 유지하고, $b$ 에는 $mid$ 값 $2.0$ 을 할당 합니다.
      따라서 $a$ 와 $b$ 는 각각 $0.5$ 와 $2.0$ 이 됩니다.
    </p>

    <div class="fig-center">
      {@html fig2.outerHTML}
    </div>

  </section>

  <section>
    <p>
      $[\;0.5,\; 2.0\;]$ 를 새로운 구간으로 하여 위와 동일한 과정을 반복합니다.
    </p>

    <p>
      반복을 진행하면 아래 표와 같이 $mid$ 가 $\sqrt{2}$ 에 근사해 가는 것을 확인 할 수 있습니다.
    </p>
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