import * as Plot from "@observablehq/plot";

/** 
 * @param {number} x 
 * @param {number} x0 
 * @param {number} x_1 
 * @param {string | null} caption
 */
export function getFig(x, x0, x_1, caption=null) {
  // 곡선 데이터 불러오기
  const curve = getCurve(
    {xMin: 0.0, xMax: 5.0, np: 101}
  )

  // 직선 데이터 불러오기
  const line = getLine(
    {x: x0, y: func(x0)},
    {x: x_1, y: func(x_1)},
    {xMin: x, xMax: 5.0, np: 101}
  );

  const plot = Plot.plot({
    grid: true,
    // figure: true,
    caption: caption || '',
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
      Plot.line(line, {x: "x", y: "y", stroke: "blue", strokeDasharray: 3}),

      Plot.ruleY([0], {stroke: "black"}),
      Plot.ruleX([x, x0, x_1], {x: x => x, y1: 0.0, y2: d => func(d), strokeWidth: 1, strokeDasharray: 3}),

      Plot.dot([x, x0, x_1], {x: x => x, y: 0, fill: "red"}),
      Plot.dot([x, x0, x_1], {x: x => x, y: x => func(x), fill: "black"}),

      Plot.axisX({label: "X", y: 0, labelAnchor:"center", labelArrow: "none", text: null, fontSize: 12}),
      Plot.axisY({label: "Y", x: 0, labelAnchor:"center", labelArrow: "none", fontSize: 12, ticks: 8}),

      Plot.text([`x0\n${x0.toFixed(4)}`], {x: x0, y: 0, dy: 20, fontSize: 13, fontWeight: "bold"}),
      Plot.text([`x_1\n${x_1.toFixed(4)}`], {x: x_1, y: 0, dy: 20, fontSize: 13, fontWeight: "bold"}),
      Plot.text([`x\n${x.toFixed(4)}`], {x: x, y: 0, dy: 20, fontSize: 13, fill: "red", fontWeight: "bold"}),

      Plot.frame()
    ]
  });

  return plot;
}


/** @param {number} x */
function func(x) {
  return Math.pow(x, 2) - 2.0;
}

/**
 * @param {{ x: number; y: number; }} p0
 * @param {{ x: number; y: number; }} p1
 * @param {{ xMin: number; xMax: number; np: number }} config
 */
function getLine(p0, p1, config) {
  const xMin = config.xMin;
  const xMax = config.xMax;
  const np = config.np;
  const dx = (xMax - xMin) / (np - 1);
  const x = [...Array(np)].keys().map(i => xMin + i * dx).toArray();
  const slope = (p1.y - p0.y) / (p1.x - p0.x);

  const data = x.map(x => {
    return {x: x, y: slope * (x - p0.x) + p0.y}
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