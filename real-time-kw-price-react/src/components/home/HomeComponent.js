import React from "react";
import TasksKwPriceComponent from "../hyperUI/TasksKwPriceComponent";
import StepLineChartComponent from "../apexCharts/SteplineChartComponent";
import SectionComponent from "../section/SectionComponent";

function HomeComponent() {
  return (
    <div>
      <StepLineChartComponent />
      <SectionComponent />
      <TasksKwPriceComponent />
    </div>
  );
}

export default HomeComponent;
