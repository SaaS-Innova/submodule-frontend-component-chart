export type CHART_TYPE_LINE = "line";
export type CHART_TYPE_BAR = "bar";
export type CHART_TYPE_PIE = "pie";
export type CHART_TYPE_DOUGHNUT = "doughnut";

export type IChartTypes =
  | CHART_TYPE_LINE
  | CHART_TYPE_BAR
  | CHART_TYPE_PIE
  | CHART_TYPE_DOUGHNUT;

export const ChartTypes: Record<string, IChartTypes> = {
  LINE: "line",
  BAR: "bar",
  PIE: "pie",
  DOUGHNUT: "doughnut",
} as const;
