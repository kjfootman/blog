<script>
    let { menu } = $props();

    let node = menu;

    // while (Object.keys(node) != null) {

    // }
    console.log(menu, typeof(menu));
</script>

<details open>
    <summary>
        Math
    </summary>

    <!-- <div><a href="#">PED</a></div> -->
    <a href="#">PED</a>
</details>

<style>
    details {
        --margin: 10px;

        width: calc(100% - calc(2 * (var(--margin))));
        margin: 10px;
        box-sizing: border-box;
        font-weight: bold;
        /* cursor: pointer; */
    }

    details > a {
        display: flex;
        width: 100%;
        text-decoration: none;
        font-weight: normal;
    }
</style>

