<script>
	import { onMount } from 'svelte';

	import renderMathInElement from 'katex/dist/contrib/auto-render.js';
	import 'katex/dist/katex.min.css';

	onMount(() => {
		// Prism.highlightAll();

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
    <h2 class="title">2차  상미분  방정식</h2>
  </section>

  <section>
    <p>
      2차 상미분 방정식 ${String.raw`m\ddot{x} + c\dot{x} + kx = 0`}$ 에 대하여
      ${String.raw`x(0) = 0, \dot{x}(0) = 0`}$ 일 때
    </p>

    <h3 class="subtitle">${String.raw`c^2 - 4mk > 0`}$ 일 경우</h3>
    <p>
      ${String.raw`y = C_1 \cdot e^{\lambda_1 t} + C_2 \cdot e^{\lambda_2 t}`}$
      ${String.raw`C_1 = \frac{-{\lambda_2}}{{\lambda_1 - \lambda_2}}`}$
      ${String.raw`C_2 = \frac{{\lambda_1}}{{\lambda_1 - \lambda_2}}`}$
    </p>

    <h3 class="subtitle">${String.raw`c^2 - 4mk = 0`}$ 일 경우</h3>

    <h3 class="subtitle">${String.raw`c^2 - 4mk < 0`}$ 일 경우</h3>
    <p>
      ${String.raw`y = e^{{\alpha} t} (C_1 \cdot \cos{\beta t} + C_2 \cdot \sin{\beta t})`}$
      ${String.raw`\alpha = \frac{c}{2m}`}$
      ${String.raw`\beta = \frac{\sqrt{4mk - c^2}}{2m}`}$
      ${String.raw`C_1 = 1`}$
      ${String.raw`C_2 = \frac{\alpha}{\beta}`}$
    </p>

    <!-- <ol>
      <li>${String.raw`c^2 - 4mk > 0`}$</li>
      <li>${String.raw`c^2 - 4mk = 0`}$</li>
      <li>${String.raw`c^2 - 4mk < 0`}$</li>
    </ol> -->
  </section>
</article>