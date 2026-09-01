import { ChartTypes } from "./chart.constant";

export interface IData {
  labels: string[];
  datasets: IDataset[];
}
export interface IDataset {
  label?: string;
  data?: number[];
  fill?: boolean;
  borderColor?: string;
  backgroundColor?: string[] | string;
  hoverBackgroundColor?: string[] | string;
  borderWidth?: number;
  tension?: number;
  yAxisID?: string;
}

export interface ICommonChartProps {
  type: IChartTypes;
  data: IData;
  height?: string;
  width?: string;
  xyAxisColor?: string;
  gridColor?: string;
  beginAtZero?: boolean;
  title?: IChartTitleProps;
  stepSize?: number;
  legendPosition?: string;
  legendLabelStyle?: boolean;
  indexAxis?: string;
  borderRadius?: number;
  /**
   * Fully-built Chart.js options. When provided, these are used as-is instead
   * of the options derived from the individual props above — for charts that
   * need custom scales, tooltips or multi-axis config.
   */
  options?: object;
  plugins?: object[];
}

export type IChartTypes = (typeof ChartTypes)[keyof typeof ChartTypes];

export interface IChartTitleProps {
  display: boolean;
  text: string;
  color: string;
  font?: {
    size?: number;
  };
}
