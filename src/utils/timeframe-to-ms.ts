import { Timeframe } from "../constants";

export const timeframeToMs = (timeframe: Timeframe): number => {
  const unit = timeframe.slice(-1);
  const value = parseInt(timeframe.slice(0, -1));
  const unitMsMap: Record<string, number> = {
    m: 60 * 1000,
    h: 60 * 60 * 1000,
    d: 24 * 60 * 60 * 1000,
  };
  return value * (unitMsMap[unit] || 0);
};
