<script>
	import { onMount } from 'svelte';

	import Prism from 'prismjs/components/prism-core';
	import 'prismjs/themes/prism-tomorrow.min.css';
	import 'prismjs/components/prism-rust.js';
	import 'prismjs/plugins/line-numbers/prism-line-numbers.min.js';
	import 'prismjs/plugins/line-numbers/prism-line-numbers.min.css';

	import renderMathInElement from 'katex/dist/contrib/auto-render.js';
	import 'katex/dist/katex.min.css';

  /** @type {import('./$types.js').PageProps }*/
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
		});
	});

</script>

<article>
  <section>
    <h2 class="title">$\S$ Backward Euler Method</h2>
  </section>

	<section>
		<p>
			상미분 방정식 (Ordinary Differential Equations)의 해를 음해법 (implicit method) 으로 구하는 방법들 중 하나 입니다.
			아래의 2차 상미분 방정식에 Backward Euler 방법을 적용해 보겟습니다.

			$${String.raw`
				\begin{equation}
				\begin{split}
					m\ddot{x} + c\dot{x} + kx = 0 \\
					\dot{x}{\footnotesize (0)} = 0 \\
					x{\footnotesize (0)} = 1
				\end{split}
				\end{equation}
			`}$$ 

			$(1)$ 을 ${String.raw`\dfrac{d{\bold{x}}^{n+1}}{dt} = \bold{f}(t^{n+1}, \bold{x}^{n+1})`}$ 형태로 변환하기 위해
			${String.raw`\dot{x}`}$ 와 $x$ 에 대하여 정리하면 다음과 같습니다.

			$${String.raw`
				\begin{equation}
				\begin{cases}
					\dfrac{d\dot{x}}{dt} = -\frac{c}{m}\dot{x} -\frac{k}{m}x \\
					\\
					\dfrac{dx}{dt} = \dot{x}
				\end{cases}
				\end{equation}
			`}$$

			$(2)$ 를 이산화 하면 아래와 같이 나타낼 수 있습니다. 음해법을 적용하기 위해 우변의 변수들은 $n+1$ 의 값을 사용합니다.

			$${String.raw`
				\begin{equation}
				\begin{cases}
					\dfrac{\dot{x}^{n+1} - \dot{x}^n}{\Delta t} = -\frac{c}{m} \dot{x}^{n+1} - \frac{k}{m} x^{n+1} \\
					\\
					\dfrac{x^{n+1} - x^n}{\Delta t} = \dot{x}^{n+1}
				\end{cases}
				\end{equation}
			`}$$

			$(3)$ 을 Matrix 형태로 정리하면 아래와 같습니다.

			$${String.raw`
				\begin{equation}
				\begin{bmatrix}
					1 + \frac{c\Delta t}{m} & \frac{k\Delta t}{m} \\
					\\
					-\Delta t & 1
				\end{bmatrix}

				\def\arraystretch{1.6}
				\begin{bmatrix}
					\dot{x}^{n+1} \\
					x^{n+1}
				\end{bmatrix}
				=
				\begin{bmatrix}
				\dot{x}^n\\
				x^n
				\end{bmatrix}
				\end{equation}
			`}$$

			<!-- $n+1$ 의 변수들에 대해ㅈ 해를 얻기 위해 양변에 역행렬 $(4)$ 의 양변에 를 정리하면 최종적으로 $(5)$ 를 얻을 수 있습니다. -->
			$(4)$ 에서 계수행렬의 역행렬을 구하고 이를 양변에 곱하면 $(5)$ 와 같은 관계식을 얻을 수 있습니다.

			$${String.raw`
				\def\arraystretch{1.6}
				\begin{equation}
				\begin{bmatrix}
					\dot{x}^{n+1} \\
					x^{n+1}
				\end{bmatrix}
				=
				\frac{m}{m + c\Delta t + k{\Delta t}^2}
				\begin{bmatrix}
					1 & -\frac{k \Delta t}{m} \\
					\Delta t & 1 + \frac{c \Delta t}{m}
				\end{bmatrix}

				\begin{bmatrix}
					\dot{x}^n \\
					x^n
				\end{bmatrix}
				\end{equation}
			`}$$

			초기값 ${String.raw`{
				\begin{bmatrix}
					\; \dot{x}\footnotesize{(0)} \; \\ x\footnotesize{(0)}
				\end{bmatrix}
				=
				\begin{bmatrix}
					\; 0 \; \\ 1 
				\end{bmatrix}
			}`}$ 으로부터 시작하여 $(5)$ 를 반복하여 근사해를 얻습니다.
		</p>
	</section>

	<section>
		<h3 class="subtitle">Example</h3>
	</section>
</article>