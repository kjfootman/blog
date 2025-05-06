<script>
    import Prism from "@magidoc/plugin-svelte-prismjs";
    import 'prismjs/components/prism-rust';
    import 'prismjs/themes/prism-tomorrow.css';
    // import Katex from 'svelte-katex';

    let { data } = $props();
</script>

<h1>Bisection Method</h1>

{@html "<h1>test</h1>"}

<span>
    범위 [a, b]에서 f(a) * f(b) &#60; 0 일 경우 해를 찾아가는 방법입니다.<br>
    a와 b의 중간 값 mid = 0.5 * (a + b)에 대해 f(a) * f(mid) &#60; 0 일 경우 b = mid
</span><br>

<!-- <Katex>ax^2+bx+c=0</Katex>
<Katex>\sqrt{2}</Katex> -->

<Prism 
    language={'rust'} 
    source={data.code}
    showCopyButton={true}
    showLineNumbers={true}
/>

<!-- <style>
    .text {
        display: block;
    }
</style> -->
