<script>
    import MenuItem from "./menuItem.svelte";

    let { menu } = $props();
    const menuItmes = menu['menuItems'];
</script>

<details open>
    <summary>
        { menu['title'] }
    </summary>
    {#each Object.entries(menuItmes) as [title, link]}
        <MenuItem title={title} link={link}></MenuItem>
    {/each}
</details>

<style>
    details {
        --margin: 10px;

        width: calc(100% - calc(2 * (var(--margin))));
        margin: 10px;
        margin-top: 20px;
        box-sizing: border-box;
        font-weight: bold;
    }

    /* details > a {
        display: flex;
        width: 100%;
        text-decoration: none;
        font-weight: normal;
    } */
</style>

