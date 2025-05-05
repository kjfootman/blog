import { error } from '@sveltejs/kit';
import katex from 'katex';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const url = "https://raw.githubusercontent.com/kjfootman/blog/main/rust_codes/src/bisection.rs";
    const res = await fetch(url);

    if (!res.ok) error(404, {message: 'Not found'});

    const text = await res.text();

    let html = katex.renderToString("c = \\pm\\sqrt{a^2 + b^2}", {
        throwOnError: false
    })

    console.log(html);

    return {
        code: text,
        html: html
    }
}