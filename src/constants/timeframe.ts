export type Timeframe = (typeof Timeframe)[number];

export const Timeframe = [
  "1m",
  "3",
  "5m",
  "15m",
  "30",
  "1h",
  "4h",
  "1d",
] as const;
