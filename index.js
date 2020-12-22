document.addEventListener("DOMContentLoaded", () => {
  const chart = Highcharts.chart("container", {
    chart: {
      type: "areaspline",
      zoomType: "xy",
    },
    credits: {
      // enabled: false,
      text: "My custom chart",
      href: "https://google.com",
      position: {
        align: "left",
        x: 10,
      },
      style: {
        fontSize: "15px",
        color: "red",
      },
    },
    title: {
      text: "Our first chart",
    },
    tooltip: {
      // animation: false,
      backgroundColor: "#333333",
      borderColor: "#334223",
      borderRadius: "20",
      // followPointer: true,
      style: {
        color: "#ffffff",
      },
      formatter() {
        return `
            <strong>X value - ${this.x} </strong>, <em>Y value - ${this.y}</em>
            name: ${this.point.series.name}
            `;
      },
    //   shared: true,
    //   formatter() {
    //     let s = `<strong>X is: </strong> ${this.x}`;
    //     console.log(this.points)
    //     this.points.forEach(function(point) {
    //         s += `<br> Y is: ${point.y}`
    //     })
    //     return s;
    //   },
    },
    colors: ["#332233", "#622243", "#832225", "#232233"],
    xAxis: {
      categories: ["Apples", "Bananas", "Oranages", "Peaches", "Berries"],
    },
    yAxis: {
      title: {
        text: "Fruits eaten",
      },
    },
    series: [
      {
        name: "John",
        data: [1, 2, 3, 10, 5],
      },
      {
        name: "jon",
        data: [8, 7, 3, 5, 0],
      },
      {
        name: "Kelly",
        data: [1, 10, 3, 4, 0],
      },
      {
        name: "Kelly",
        data: [1, 0, 3, 1, 0],
      },
    ],
  });
});
