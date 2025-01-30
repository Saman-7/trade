import { Candle } from "../constants";

export const extractCandles = (candles: Array<Candle>, key: keyof Candle) => {
  return candles.map((candle) => candle[key]);
};
