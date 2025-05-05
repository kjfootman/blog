<script>
    import Prism from "@magidoc/plugin-svelte-prismjs";
    import 'prismjs/components/prism-rust';
    import 'prismjs/themes/prism-tomorrow.css';
    import 'katex/contrib/mhchem';

    let { data } = $props();
</script>

<h1>Bisection Method</h1>

{@html "<h1>test</h1>"}
{@html data.html}

<Prism 
    language={'rust'} 
    source={data.code}
    showCopyButton={true}
    showLineNumbers={true}
/>
