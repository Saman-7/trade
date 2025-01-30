import { Num } from "ccxt";

export type Candle = {
  timestamp: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
};

export const Candle = [
  "timestamp",
  "open",
  "high",
  "low",
  "close",
  "volume",
] as const;
