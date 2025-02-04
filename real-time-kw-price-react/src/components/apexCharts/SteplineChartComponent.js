import React, { useEffect, useState, useRef } from "react";
import ApexCharts from "apexcharts";
import axios from "axios";

const StepLineChartComponent = () => {
  const [region, setRegion] = useState("SE1"); // Standardregion SE1
  const [electricityPrices, setElectricityPrices] = useState([]);
  const chartRef = useRef(null); // Referens till grafcontainern
  const chartInstance = useRef(null);

  // Hämta elpriser från API
  useEffect(() => {
    const fetchPrices = async () => {
      const validRegions = ["SE1", "SE2", "SE3", "SE4"];
      const currentRegion = validRegions.includes(region?.toUpperCase())
        ? region.toUpperCase()
        : "SE1"; // Standard SE1

      try {
        const url = `https://localhost:7160/api/ElectricityPrice/${currentRegion}`;
        const response = await axios.get(url);
        setElectricityPrices(response.data); // Uppdatera state med elpriserna
      } catch (err) {
        console.error("Fel vid hämtning av data:", err);
      }
    };

    fetchPrices();
  }, [region]); // Hämta ny data när regionen ändras

  // Rendera grafen när elpriserna har hämtats
  useEffect(() => {
    if (electricityPrices.length === 0 || !chartRef.current) return; // Avbryt om ingen data finns eller om referensen saknas

    // Förbered data
    const data = electricityPrices.map((price) => ({
      x: new Date(price.time_start).toLocaleString("sv-SE", {
        day: "2-digit",
        month: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      }),
      y: price.SEK_per_kWh, // Elpriset
    }));

    // Konfigurera grafen
    const options = {
      series: [
        {
          name: "SEK per kWh",
          data: data,
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
        text: `Kilowattpris för region ${region}`,
        align: "center",
        style: {
          color: "#fafaf8",
          fontSize: "30px",
          fontWeight: "700",
        },
      },
      xaxis: {
        type: "category",
        labels: {
          style: {
            colors: "#fafaf8",
            fontSize: "14px",
          },
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

    // Ta bort tidigare graf om den finns
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Skapa och rendera grafen
    chartInstance.current = new ApexCharts(chartRef.current, options);
    chartInstance.current.render();

    // Rensa upp vid avmontering
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [electricityPrices]); // Kör när elpriserna ändras

  return (
    <div className="relative">
      <div className="mb-4 flex justify-center">
        <label
          htmlFor="regionSelect"
          className="text-white mr-2">
          Välj region:
        </label>
        <select
          id="regionSelect"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="p-2 rounded-md">
          <option value="SE1">SE1 (Luleå / Norra Sverige)</option>
          <option value="SE2">SE2 (Sundsvall / Norra Mellansverige)</option>
          <option value="SE3">SE3 (Stockholm / Södra Mellansverige)</option>
          <option value="SE4">SE4 (Malmö / Södra Sverige)</option>
        </select>
      </div>

      {/* Graf-container med useRef */}
      <div
        ref={chartRef}
        className="mb-20 mt-10"></div>
    </div>
  );
};

export default StepLineChartComponent;
