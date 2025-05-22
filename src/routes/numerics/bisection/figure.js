import * as Plot from "@observablehq/plot";

/**
 * @param {number} xMin "xMin value"
 * @param {number} xMax "xMax value"
 * @param {number} nPoint "number of points"
 */
export function getFig(xMin, xMax, nPoint) {
  const np = nPoint;
  const anno_dy = 20;

  const mid = 0.5 * (xMin + xMax)
  const dx = (xMax - xMin) / (np - 1.0);
  const x = [...Array(np).keys()].map(i => xMin + i * dx);
  const data = x.values().map(x => {
    return {x: x, y: func(x)};
  }).toArray();

  let plot = Plot.plot({
    grid: true,
    x: {
      label: "x",
      domain: [0, 3.7],
      ticks: 15,
    },
    y: {
      domain: [-3.5, 14],
    },
    width: 600,
    clip: "frame",
    marks: [
      Plot.line(data, {x: "x", y: "y"}),

      Plot.ruleY([0], {stroke: "black"}),
      Plot.ruleX([xMin, mid, xMax], {x: d => d, y1: 0.0, y2: d => func(d), stroke: "red", strokeWidth: 2, strokeDasharray: 3}),

      Plot.dot([xMin, mid, xMax], {x: d => d, y: d => func(d), fill: "red"}),

      Plot.areaY(data, {x: d => d.x >= 0.5 && d.x <= 3.5 ? d.x : NaN , y: "y", opacity: 0.1,}),
      Plot.axisX({label: "x", y: 0, fontSize: 12}),
      Plot.axisY({label: "Y", x: 0, fontSize: 12, ticks: 8}),

      Plot.text(["a"], {x: xMin, y: func(xMin), dy: anno_dy, fontSize: 15}),
      Plot.text(["b"], {x: xMax, y: func(xMax), dy: -anno_dy, fontSize: 15}),
      Plot.text(["mid"], {x: mid, y: func(mid), dy: -anno_dy, fontSize: 15}),

      Plot.frame()
    ]
  });

  return plot;
}

/** @param {number} x */
function func(x) {
  return Math.pow(x, 2) - 2.0;
}