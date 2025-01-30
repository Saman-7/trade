import { Num } from "ccxt";

export type Candle = {
  timestamp: string;
  open: Num;
  high: Num;
  low: Num;
  close: Num;
  volume: Num;
};

export const Candle = [
  "timestamp",
  "open",
  "high",
  "low",
  "close",
  "volume",
] as const;
