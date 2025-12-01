export type CHART_TYPE_LINE = "line";
export type CHART_TYPE_BAR = "bar";
export type CHART_TYPE_PIE = "pie";

export type IChartTypes = CHART_TYPE_LINE | CHART_TYPE_BAR | CHART_TYPE_PIE;

export const ChartTypes: Record<string, IChartTypes> = {
  LINE: "line",
  BAR: "bar",
  PIE: "pie",
} as const;
