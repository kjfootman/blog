import * as Plot from "@observablehq/plot";

/**
 * @param {{x: Number; y: Number}[]} yNumeric
 * @param {{x: Number; y: Number}[]} yExact
 */
export function getFig(yNumeric, yExact) {

  // t.entries().forEach((e, i) => {
  //   console.log(t[i], yNumeric[i], yExact[i])
  // });

  const plot = Plot.plot({
    grid: true,
    // figure: true,
    caption: '',
    x: {
      label: "x",
      domain: [0.0, 10.0],
      ticks: 10,
    },
    y: {
      domain: [-0.6, 1.0],
      ticks: 10
    },
    width: 600,
    clip: "frame",
    marks: [
      Plot.line(yExact, {x: "x", y: "y", stroke: "red", strokeWidth: 2}),
      Plot.dot(yNumeric, {x: "x", y: "y", fill: "black"}),
      // Plot.line(line, {x: "x", y: "y", stroke: "blue", strokeDasharray: 3}),

      // Plot.ruleY([0], {stroke: "black"}),
      // Plot.ruleX([x, x0, x_1], {x: x => x, y1: 0.0, y2: d => func(d), strokeWidth: 1, strokeDasharray: 3}),

      // Plot.dot([x, x0, x_1], {x: x => x, y: 0, fill: "red"}),
      // Plot.dot([x, x0, x_1], {x: x => x, y: x => func(x), fill: "black"}),

      // Plot.axisX({label: "X", y: 0, labelAnchor:"center", labelArrow: "none", text: null, fontSize: 12}),
      // Plot.axisY({label: "Y", x: 0, labelAnchor:"center", labelArrow: "none", fontSize: 12, ticks: 8}),

      // Plot.text([`x0\n${x0.toFixed(4)}`], {x: x0, y: 0, dy: 20, fontSize: 13, fontWeight: "bold"}),
      // Plot.text([`x_1\n${x_1.toFixed(4)}`], {x: x_1, y: 0, dy: 20, fontSize: 13, fontWeight: "bold"}),
      // Plot.text([`x\n${x.toFixed(4)}`], {x: x, y: 0, dy: 20, fontSize: 13, fill: "red", fontWeight: "bold"}),

      Plot.frame()
    ]
  });

  return plot;
}