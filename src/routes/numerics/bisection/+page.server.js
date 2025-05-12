import { error } from '@sveltejs/kit';
import { read } from '$app/server';
// import { base}
import { assets } from '$app/paths';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const code_url = 'https://raw.githubusercontent.com/kjfootman/blog/main/rust_codes/src/bisection.rs';
	const res = await fetch(code_url);

	if (!res.ok) error(404, { message: 'Not found' });

	const text = await res.text();

	// let tmp = await fetch('/src/lib/rust_codes/src/bisection.rs');
	// let tmp = await fetch('/rust_codes/src/bisection.rs');
	// let test = await tmp.text();
	// console.log(test);

	return {
		code: text,
		// html: html
		text: ''
	};
}
