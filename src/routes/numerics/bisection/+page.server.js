import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	// const code_url = 'https://raw.githubusercontent.com/kjfootman/blog_codes/dev/examples/bisection.rs';
	// const res = await fetch(code_url);

	// if (!res.ok) error(404, { message: 'Not found' });

	// const text = await res.text();

	return {
		code: '',
		// html: html
		text: ''
	};
}
