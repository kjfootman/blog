import { error } from '@sveltejs/kit';
import { read } from '$app/server';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const url = 'https://raw.githubusercontent.com/kjfootman/blog/main/rust_codes/src/bisection.rs';
	const res = await fetch(url);

	if (!res.ok) error(404, { message: 'Not found' });

	const text = await res.text();

	console.log(await read('/static/menu.yaml').text());

	return {
		code: text
		// html: html
	};
}
