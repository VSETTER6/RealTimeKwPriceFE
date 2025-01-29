import React from "react";
import TasksKwPriceComponent from "../hyperUI/TasksKwPriceComponent";
import StepLineChartComponent from "../apexCharts/SteplineChartComponent";

function HomeComponent() {
  return (
    <div>
      <TasksKwPriceComponent />
      <StepLineChartComponent />
    </div>
  );
}

export default HomeComponent;
