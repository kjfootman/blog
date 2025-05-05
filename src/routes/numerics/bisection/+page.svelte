<script>
    import Prism from "@magidoc/plugin-svelte-prismjs";
    import 'prismjs/components/prism-rust';
    import 'prismjs/themes/prism-tomorrow.css';

    let { data } = $props();
</script>

<h1>Bisection Method</h1>

<div style="font-size: 0.8rem;">
    <Prism
        language={'rust'}
        source={data.code}
        showCopyButton={true}
        showLineNumbers={true}
    />
</div>

<!-- <code>{data.code}</code> -->
 <!-- {#await data.code}
    <p>waitting</p>
 {:then code}
    <code class="language-rust">let x = 3;</code>
 {/await} -->