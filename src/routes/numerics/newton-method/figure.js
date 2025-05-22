import * as Plot from "@observablehq/plot";

export function getFig() {
  const x0 = 3.5;
  const x1 = 2.0357;

  // 접선 데이터
  const line = getLine(
    d_func(x0), 
    {x: x0, y: func(x0)},
    {xMin: x1, xMax: 5.0, np: 101}
  );

  // 곡선 데이터
  const curve = getCurve(
    {xMin: 0.0, xMax: 5.0, np: 101}
  )

  const plot = Plot.plot({
    grid: true,
    x: {
      label: "x",
      domain: [0.0, 5.0],
      ticks: 15,
    },
    y: {
      domain: [-3.5, 20],
      ticks: 16
    },
    width: 600,
    clip: "frame",
    marks: [
      Plot.line(curve, {x: "x", y: "y"}),
      Plot.line(line, {x: "x", y: "y", stroke: "blue"}),

      Plot.ruleY([0], {stroke: "black"}),
      Plot.ruleX([x0, x1], {x: x => x, y1: 0.0, y2: d => func(d), strokeWidth: 1, strokeDasharray: 3}),

      Plot.dot([x0, x1], {x: x => x, y: 0, fill: "red"}),
      Plot.dot([x0, x1], {x: x => x, y: x => func(x), fill: "black"}),

      Plot.axisX({label: "x", y: 0, fontSize: 12}),
      Plot.axisY({label: "Y", x: 0, fontSize: 12, ticks: 8}),

      Plot.text(["x0"], {x: x0, y: 0, dy: 20, fontSize: 13, fontWeight: "bold"}),
      Plot.text(["x1"], {x: 2.2, y: 0, dy: 20, fontSize: 13, fill: "red"}),
      // Plot.text(["b"], {x: xMax, y: func(xMax), dy: -anno_dy, fontSize: 15}),
      // Plot.text(["mid"], {x: mid, y: func(mid), dy: -anno_dy, fontSize: 15}),

      Plot.frame()
    ]
  });

  return plot;
}


/** @param {number} x */
function func(x) {
  return Math.pow(x, 2) - 2.0;
}


/** @param {number} x */
function d_func(x) {
  return 2.0 * x;
}


/**
 * @param { number } slope
 * @param {{ x: number; y: number; }} p
 * @param {{ xMin: number; xMax: number; np: number }} config
 */
function getLine(slope, p, config) {
  const xMin = config.xMin;
  const xMax = config.xMax;
  const np = config.np;
  const dx = (xMax - xMin) / (np - 1);
  const x = [...Array(np)].keys().map(i => xMin + i * dx).toArray();

  const data = x.map(x => {
    return {x: x, y: slope * (x - p.x) + p.y}
  });

  return data;
}


/** @param {{ xMin: number; xMax: number; np: number }} config */
function getCurve(config) {
  const xMin = config.xMin;
  const xMax = config.xMax;
  const np = config.np;
  const dx = (xMax - xMin) / (np - 1);
  const x = [...Array(np)].keys().map(i => xMin + i * dx).toArray();

  const data = x.map(x => {
    return {x: x, y: func(x)}
  });

  return data;
}