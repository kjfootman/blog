import * as Plot from "@observablehq/plot";

export function getFig1() {
  const np = 101;
  const xMin = 0;
  const xMax = 5;
  const dx = (xMax - xMin) / (np - 1.0);
  const x = [...Array(np).keys()].map(i => xMin + i * dx);
  const data = x.values().map(x => {
    return {x: x, y: func(x)};
  }).toArray();

  let plot = Plot.plot({
    // grid: true,
    className: "fig1",
    x: {
      label: "x",
      domain: [0, 3.7],
      ticks: 15
    },
    y: {
      domain: [-3, 14],
    },
    clip: "frame",
    marks: [
      Plot.ruleX([0], {stroke: "black"}),
      Plot.ruleY([0], {stroke: "black"}),
      Plot.ruleX([2], {x: 2.0, y1: 0.0, y2: func(2.0)}),
      // Plot.line([[2.0, 0.0], [2.0, func(2.0)]]),
      // Plot.line([[0.5, 0.0], [0.5, func(0.5)]]),
      // Plot.line([[3.5, 0.0], [3.5, func(3.5)]]),
      Plot.line(data, {x: "x", y: "y"}),
      Plot.areaY(data, {x: d => d.x >= 0.5 && d.x <= 3.5 ? d.x : NaN , y: "y", opacity: 0.1,}),
      Plot.axisX({label: "x", y: 0}),
      Plot.axisY({label: "Y", x: 0, ticks: 8}),
      // Plot.frame()
    ]
  });

  return plot;
}

/** @param {number} x */
function func(x) {
  return Math.pow(x, 2) - 2.0;
}