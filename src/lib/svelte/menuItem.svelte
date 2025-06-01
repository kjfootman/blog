<script>
	let { title, link } = $props();
</script>

<div><a href={link}>{title}</a></div>

<style>
	div {
		--margin: 0.5rem;

		width: calc(100% - 2 * var(--margin));
		margin-top: var(--margin);
		margin-left: 0.5rem;
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
	}

	div > a:hover {
		color: red;
		font-weight: bold;
	}
</style>
