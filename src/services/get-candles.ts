import dayjs, { ManipulateType } from "dayjs";
import { Symbols, Timeframe } from "../constants";
import { Binance } from "../exchanges";

// Get Crypto Candles
export const getCandles = async (
  symbol: Symbols,
  timeframe: Timeframe,
  time: ManipulateType,
  lookback: number
) => {
  const since = dayjs().subtract(lookback, time).valueOf();
  const ohlcv = await Binance.fetchOHLCV(symbol, timeframe, since);
  return ohlcv.map(([timestamp, open, high, low, close, volume]) => ({
    timestamp: dayjs(timestamp).format("YYYY-MM-DD HH:mm:ss"),
    open,
    high,
    low,
    close,
    volume,
  }));
};
