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
    legendPosition,
    legendLabelStyle = false,
    indexAxis = "x",
    borderRadius = 8,
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
      position: legendPosition || "top",
      labels: {
        usePointStyle: legendLabelStyle,
        color: xyAxisColor,
      },
    },
    title: title,
    tooltip: {
      axis: indexAxis === "y" ? "y" : "x",
    },
  };
  const chartsWithoutScales = [ChartTypes.PIE];

  const barBorderRadius =
    indexAxis === "y"
      ? {
          topLeft: 0,
          topRight: borderRadius,
          bottomLeft: 0,
          bottomRight: borderRadius,
        }
      : {
          topLeft: borderRadius,
          topRight: borderRadius,
          bottomLeft: 0,
          bottomRight: 0,
        };

  const options = {
    indexAxis: indexAxis,
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "nearest",
      intersect: false,
    },
    borderRadius: barBorderRadius,
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
