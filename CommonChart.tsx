import { Chart } from "primereact/chart";
import { ICommonChartProps } from "./chart.model";
import { ChartTypes } from "./chart.constant";

const CommonChart = (props: ICommonChartProps) => {
  const {
    type,
    data,
    height = "500px",
    width = "100%",
    xyAxisColor,
    gridColor = "#EBEDEF",
    beginAtZero = true,
    title,
    stepSize,
  } = props;
  const scales = {
    x: {
      ticks: {
        color: xyAxisColor,
      },
      grid: {
        color: gridColor,
      },
    },
    y: {
      ticks: {
        color: xyAxisColor,
        stepSize: stepSize,
      },
      grid: {
        color: gridColor,
      },
      beginAtZero: beginAtZero,
    },
  };
  const plugins = {
    legend: {
      labels: {
        color: xyAxisColor,
      },
    },
    title: title,
  };
  const chartsWithoutScales = [ChartTypes.PIE];

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "nearest",
      intersect: false,
    },
    plugins,
    scales: chartsWithoutScales?.includes(type) ? undefined : scales,
  };
  return (
    <Chart
      type={type}
      data={data}
      options={options}
      height={height}
      width={width}
    />
  );
};

export default CommonChart;
