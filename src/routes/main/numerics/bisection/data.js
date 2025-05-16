import * as Plot from "@observablehq/plot";


export function getFig1() {
  const np = 101;
  const xMin = 0;
  const xMax = 5;
  const anno_dy = 15;

  const dx = (xMax - xMin) / (np - 1.0);
  const x = [...Array(np).keys()].map(i => xMin + i * dx);
  const data = x.values().map(x => {
    return {x: x, y: func(x)};
  }).toArray();

  let plot = Plot.plot({
    grid: true,
    className: "fig1",
    x: {
      label: "x",
      domain: [0, 3.7],
      ticks: 15,
    },
    y: {
      domain: [-3, 14],
    },
    clip: "frame",
    marks: [
      Plot.line(data, {x: "x", y: "y"}),

      Plot.ruleY([0], {stroke: "black"}),
      Plot.ruleX([0.5, 2, 3.5], {x: d => d, y1: 0.0, y2: d => func(d), stroke: "red", strokeWidth: 2, strokeDasharray: 3}),

      Plot.dot([0.5, 2, 3.5], {x: d => d, y: d => func(d), fill: "red"}),

      Plot.areaY(data, {x: d => d.x >= 0.5 && d.x <= 3.5 ? d.x : NaN , y: "y", opacity: 0.1,}),
      Plot.axisX({label: "x", y: 0, className: "x-axis"}),
      Plot.axisY({label: "Y", x: 0, className: "y-axis", ticks: 8}),

      Plot.text(["a"], {x: 0.5, y: func(0.5), dy: anno_dy, className: "annotation"}),
      Plot.text(["b"], {x: 3.5, y: func(3.5), dy: -anno_dy, className: "annotation"}),
      Plot.text(["mid"], {x: 2.0, y: func(2.0), dy: -anno_dy, className: "annotation"}),

      Plot.frame()
    ]
  });

  return plot;
}

/** @param {number} x */
function func(x) {
  return Math.pow(x, 2) - 2.0;
}