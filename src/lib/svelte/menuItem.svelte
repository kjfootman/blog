<script>
	let { title, link } = $props();
</script>

<div><a href={link}>{title}</a></div>

<style>
	div {
		--margin: 10px;

		width: calc(100% - 2 * var(--margin));
		margin: var(--margin);
		height: 40px;
		border: 2px solid black;
		border-radius: 10px;

		box-sizing: border-box;
	}

	div > a {
		display: flex;
		text-decoration: none;
		width: 100%;
		padding: 0 10px;
		height: 100%;
		align-items: center;
		font-weight: normal;
		font-size: 15px;
		color: black;

		box-sizing: border-box;
	}

	div > a:hover {
		color: red;
		font-weight: bold;
	}

	/* div > a:visited {
        color: black;
    } */
</style>
