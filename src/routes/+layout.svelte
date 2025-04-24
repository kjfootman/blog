<script>
    let { data, children } = $props();
</script>

<svelte:head>
    <title>Sloth</title>
</svelte:head>

<header>
    <h1>this is a header</h1>
</header>

<main>
    <nav>

    </nav>
    {@render children()}
</main>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
    }

    header {
        width: 100%;
    }

    nav {
        width: 100%;
        background-color: aqua;
    }

    main {
        --nav-width: 300px;

        width: 100%;
        height: 500px;
        background-color: aliceblue;
        /* box-sizing: border-box; */

        display: grid;
        grid-template-columns: var(--nav-width) calc(100% - var(--nav-width));
    }
</style>