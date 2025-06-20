export const ssr = false;

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	let url = 'https://raw.githubusercontent.com/kjfootman/blog_codes/main/examples/output/backward_euler.csv';
  let res = await fetch(url);

  const csv = await res.text();
  const rows = csv.split('\n');
  let t = new Array();
  let yNumeric = new Array();
  let yExact = new Array();

  // remove last row
	rows.pop();
  // remove header
  rows.shift();

  rows.map((row, _) => {
    const token = row.split(',');
    const t = Number(token[0]);

    yExact.push({
      x: t,
      y: Number(token[2])
    });

    yNumeric.push({
      x: t,
      y: Number(token[1])
    })
  });

  return {
    numericSol: yNumeric,
    exactSol: yExact
  }
}