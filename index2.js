document.addEventListener("DOMContentLoaded", () => {
  const chart = Highcharts.chart("container", {
    chart: {
      type: "areaspline",
    },
    xAxis: {
      // categories: ["Apples", "Bananas", "Oranages"],
    },
    yAxis: {
      title: {
        text: "Fruits eaten",
      },
    },
    series: [
      {
        name: "Fruit consumtion",
        data: [1, 2, 3, 5, -2, -5, 10, 15],
        negativeColor: "red"
      },
    ],
  });
});
