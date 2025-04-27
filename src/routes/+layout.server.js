// /** @type {import('@sveltejs/adapter-vercel').Config} */
// export const config = {
//     runtime: 'nodejs22.x'
// };

// // import fs from 'fs';
// import { read } from '$app/server';
// import YAML from 'yaml';

// /** @type {import('./$types').LayoutServerLoad} */
// export async function load() {
//     // const file = fs.readFileSync('static/menu.yaml', 'utf8');
//     const file = await read('/menu.yaml').text();

//     return {
//         menu: YAML.parse(file)
//         // menu: {mymenu: 'test'}
//     }
// }