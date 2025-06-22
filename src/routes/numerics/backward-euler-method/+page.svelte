<script>
	import { onMount } from 'svelte';

	import Prism from 'prismjs/components/prism-core';
	import 'prismjs/themes/prism-tomorrow.min.css';
	import 'prismjs/components/prism-rust.js';
	import 'prismjs/plugins/line-numbers/prism-line-numbers.min.js';
	import 'prismjs/plugins/line-numbers/prism-line-numbers.min.css';

	import renderMathInElement from 'katex/dist/contrib/auto-render.js';
	import 'katex/dist/katex.min.css';
	import { getFig } from './figure.js';

  /** @type {import('./$types.js').PageProps }*/
	let { data } = $props();

	let fig1 = getFig(data.numericSol, data.exactSol);

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
			아래의 2차 상미분 방정식에 Backward Euler 방법을 적용해 보겠습니다.

			$${String.raw`
				\begin{equation}
				\begin{split}
					m\ddot{x} + c\dot{x} + kx = 0 \\
					\dot{x}^{\scriptsize 0} = 0 \\
					x^{\scriptsize 0} = 1
				\end{split}
				\end{equation}
			`}$$

			위의 식 $(1)$ 을 $${String.raw`
				\dfrac{d{\bold{x}}^{n+1}}{dt} = \bold{f}(t^{n+1}, \bold{x}^{n+1})
			`}$$ 형태로 변환하기 위해
			${String.raw`\dot{x}`}$ 와 $x$ 에 대하여 정리하면 다음과 같습니다.

			$${String.raw`
				\begin{equation}
				\begin{cases}
					\enspace \dfrac{d\dot{x}}{dt} = -\frac{c}{m}\dot{x} -\frac{k}{m}x \\
					\\
					\enspace \dfrac{dx}{dt} = \dot{x}
				\end{cases}
				\end{equation}
			`}$$

			$(2)$ 를 이산화 하면 아래와 같이 나타낼 수 있습니다. 음해법을 적용하기 위해 우변의 변수들은 $n+1$ 의 값을 사용합니다.

			$${String.raw`
				\begin{equation}
				\begin{cases}
					\enspace \dfrac{\dot{x}^{n+1} - \dot{x}^n}{\Delta t} = -\frac{c}{m} \dot{x}^{n+1} - \frac{k}{m} x^{n+1} \\
					\\
					\enspace \dfrac{x^{n+1} - x^n}{\Delta t} = \dot{x}^{n+1}
				\end{cases}
				\end{equation}
			`}$$

			$(3)$ 을 Matrix 형태로 정리하면 아래와 같습니다.

			$${String.raw`
				\begin{equation}
				\begin{bmatrix}
					\enspace 1 + \frac{c\Delta t}{m} & \frac{k\Delta t}{m} \enspace \\
					\\
					-\Delta t & 1
				\end{bmatrix}

				\def\arraystretch{1.6}
				\begin{bmatrix}
					\enspace \dot{x}^{n+1} \enspace \\
					x^{n+1}
				\end{bmatrix}
				=
				\begin{bmatrix}
					\enspace \dot{x}^n \enspace \\
					x^n
				\end{bmatrix}
				\end{equation}
			`}$$

			$(4)$ 에서 계수행렬의 역행렬을 구하고 이를 양변에 곱하면 $(5)$ 와 같은 관계식을 얻을 수 있습니다.

			$${String.raw`
				\def\arraystretch{1.6}
				\begin{equation}
				\begin{bmatrix}
					\enspace \dot{x}^{n+1} \enspace \\
					x^{n+1}
				\end{bmatrix}
				=
				\frac{m}{m + c\Delta t + k{\Delta t}^2}
				\begin{bmatrix}
					1 & -\frac{k \Delta t}{m}  \\
					\enspace\Delta t & 1 + \frac{c \Delta t}{m} \enspace
				\end{bmatrix}

				\begin{bmatrix}
					\enspace \dot{x}^n \enspace \\
					x^n
				\end{bmatrix}
				\end{equation}
			`}$$

			초기값 ${String.raw`{
				\begin{bmatrix}
					\; \dot{x}^{\scriptsize 0} \; \\ x^{\scriptsize 0}
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
		<p>
			아래 예제는 Backward Euler Method 를 사용하여
			${String.raw`
				2 \ddot{x} + \dot{x} + 2 x = 0
			`}$ 의 해를 찾는 과정입니다.
			초기값
			${String.raw`
				\begin{bmatrix}
					\; \dot{x}^{\scriptsize 0} \; \\ x^{\scriptsize 0}
				\end{bmatrix}
				=
				\begin{bmatrix}
					\; 0 \; \\ 1
				\end{bmatrix}
			`}$ 로 부터 시작하여 ${String.raw`\Delta t = 0.1`}$ 씩 전진하면서 $t = 10$ 까지 근사해를 구해보도록 하겠습니다.
		</p>
		<p>
			식 $(5)$ 에 각각의 계수에 해당하는 값을 대입하면 아래와 같습니다.
			$${String.raw`
				\def\arraystretch{1.6}
				\begin{equation}
				\begin{bmatrix}
					\enspace \dot{x}^{n+1} \enspace \\
					x^{n+1}
				\end{bmatrix}
				% =
				% \frac{2}{2 + (1) \cdot (0.1) + (2) \cdot ({0.1}^2)}
				% \begin{bmatrix}
				% 	1 & -\frac{(2) \cdot (0.1)}{2}  \\
				% 	\enspace 0.1 & 1 + \frac{(1) \cdot (0.1)}{2} \enspace
				% \end{bmatrix}

				% \begin{bmatrix}
				% 	\enspace \dot{x}^n \enspace \\
				% 	x^n
				% \end{bmatrix}
				=
				\frac{1}{1.06}
				\begin{bmatrix}
					1 & -0.1  \\
					\enspace 0.1 & 1.05 \enspace
				\end{bmatrix}

				\begin{bmatrix}
					\enspace \dot{x}^n \enspace \\
					x^n
				\end{bmatrix}
				\end{equation}
			`}$$
		</p>
		<p>
			$t = 0.1$ 일 때
			$${String.raw`
				\def\arraystretch{1.6}
				\begin{equation}
				\begin{bmatrix}
					\enspace \dot{x}^{1} \enspace \\
					x^{1}
				\end{bmatrix}
				=
				\frac{1}{1.06}
				\begin{bmatrix}
					1 & -0.1  \\
					\enspace 0.1 & 1.05 \enspace
				\end{bmatrix}

				\begin{bmatrix}
					\enspace \dot{x}^0 \enspace \\
					x^0
				\end{bmatrix}
				=
				\begin{bmatrix}
					\; -\frac{0.1}{1.06} \; \\ \frac{1.05}{1.06}
				\end{bmatrix}
				\end{equation}
			`}$$
			</p>
			<p>
			$t = 0.2$ 일 때
			$${String.raw`
				\def\arraystretch{1.6}
				\begin{equation}
				\begin{bmatrix}
					\enspace \dot{x}^{2} \enspace \\
					x^{2}
				\end{bmatrix}
				=
				\frac{1}{1.06}
				\begin{bmatrix}
					1 & -0.1  \\
					\enspace 0.1 & 1.05 \enspace
				\end{bmatrix}

				\begin{bmatrix}
					\enspace \dot{x}^1 \enspace \\
					x^1
				\end{bmatrix}
				=
				\frac{1}{1.06^2}
				\begin{bmatrix}
					\; -0.205 \; \\ 1.0925
				\end{bmatrix}
				\end{equation}
			`}$$
		</p>

		<p>
			위 과정을 반복하면 아래 그림과 같이 근사해를 얻을 수 있습니다. 
			그림에서 확인할 수 있는 것처럼 수치 에러 때문에 정확한 해(exact solution)와 차이가 발생하고 있습니다.
			${String.raw`\Delta t`}$ 를 작에 적용할 경우 더 많은 계산이 필요하지만 수치 에러가 줄어듭니다.
		</p>

    <div class="fig-center">
      {@html fig1.outerHTML}
    </div>
	</section>
</article>