import React from "react";
import { Chart } from "primereact/chart";
import { CommonChartProps } from "./chart.model";

const CommonChart = (props: CommonChartProps) => {
  const { type, data, options,width } = props;
  return (
      <Chart type={type} data={data} options={options}  width={width}/>
  );
};

export default CommonChart;
