import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const code_url = 'https://raw.githubusercontent.com/kjfootman/blog_codes/dev/examples/bisection.rs';
	const res = await fetch(code_url);

	if (!res.ok) error(404, { message: 'Not found' });

	const text = await res.text();


	const csv_url = 'https://raw.githubusercontent.com/kjfootman/blog_codes/main/examples/output/bisection.csv'
	const test = await fetch(csv_url);

	if (!test.ok) error(404, { message: 'Not found' });

	const tmp = await test.text();

	return {
		code: text,
		// html: html
		text: '',
		csv: tmp
	};
}
