import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	let url = 'https://raw.githubusercontent.com/kjfootman/blog_codes/main/examples/bisection.rs';
	let res = await fetch(url);

	if (!res.ok) error(404, { message: 'Not found' });

	const code = await res.text();

	url = 'https://raw.githubusercontent.com/kjfootman/blog_codes/main/examples/output/bisection.csv'
	res = await fetch(url);

	if (!res.ok) error(404, { message: 'Not found' });

	const csv = await res.text();
	const rows = csv.split('\n');
	rows.pop();

	const header = rows.shift()?.split(',') || new Array;
	const body = rows.map(e => e.split(',').map((e, i) => i > 0 ? Number(e).toFixed(4): e));

	// console.log(header);
	// console.log(body);

	return {
		code: code,
		csv: {
			header: header,
			body: body
		}
	};
}
