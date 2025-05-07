import { error } from '@sveltejs/kit';
import { read } from '$app/server';
import some_file from '$lib/somefile.txt';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const url = 'https://raw.githubusercontent.com/kjfootman/blog/main/rust_codes/src/bisection.rs';
	const res = await fetch(url);

	if (!res.ok) error(404, { message: 'Not found' });

	const text = await res.text();

	// const test = await read(some_file).text();
	// console.log(test);

	const test2 = await fetch(some_file);
	const item = await test2.text()
	console.log(item);

	return {
		code: text,
		// html: html
		text: item
	};
}
