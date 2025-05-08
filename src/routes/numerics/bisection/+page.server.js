import { error } from '@sveltejs/kit';
import some_file from '$lib/somefile.txt';
import { read } from '$app/server';
// import rust from '$lib/rust_codes/src/bisection.rs';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const code_url = 'https://raw.githubusercontent.com/kjfootman/blog/main/rust_codes/src/bisection.rs';
	const res = await fetch(code_url);

	if (!res.ok) error(404, { message: 'Not found' });

	const text = await res.text();

	// const test = await read(some_file).text();
	// console.log(test);

	// const test2 = await fetch(some_file);
	// const item = await test2.text()
	// console.log(item);

	// const test2 = await fetch(rust);
	// const item = await test2.text()
	// console.log(item);

	// let tmp = await fetch('/src/lib/rust_codes/src/bisection.rs');
	// let test = await tmp.text();
	// console.log(test);

	const test = await read('/src/lib/rust_codes/src/bisection.rs').text();
	console.log(test);

	return {
		code: text,
		// html: html
		text: test
	};
}
