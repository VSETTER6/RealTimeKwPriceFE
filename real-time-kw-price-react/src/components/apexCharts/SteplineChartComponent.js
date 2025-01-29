import React, { useEffect } from "react";
import ApexCharts from "apexcharts";
import { steplineChartDataUtility } from "../../utilities/data/steplineChartDataUtility";

const StepLineChartComponent = () => {
  useEffect(() => {
    const options = {
      series: [
        {
          name: "Öre/kWh",
          data: steplineChartDataUtility(),
        },
      ],
      chart: {
        type: "line",
        height: 500,
        fontFamily: "'Nunito', sans-serif",
      },
      stroke: {
        curve: "stepline",
        colors: ["#ffd700"],
      },
      dataLabels: {
        enabled: false,
      },
      title: {
        text: "Kilowattpriset dag för dag",
        align: "center",
        style: {
          color: "#fafaf8",
          fontSize: "30px",
          fontWeight: "700",
        },
      },
      subtitle: {
        text: "Kolla vad kilowattpriset är idag eller vad det var igår.",
        align: "center",
        margin: 30,
        style: {
          color: "#6a7181",
          fontSize: "20px",
          fontWeight: "400",
        },
      },
      markers: {
        hover: {
          sizeOffset: 4,
        },
      },
      xaxis: {
        type: "category",
        labels: {
          style: {
            colors: "#fafaf8",
            fontSize: "14px",
          },
          rotate: 0,
        },
      },
      yaxis: {
        labels: {
          formatter: (value) => value.toFixed(2),
          style: {
            colors: "#fafaf8",
            fontSize: "14px",
          },
        },
      },
    };

    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="chart" className="mt-12"></div>;
};

export default StepLineChartComponent;
