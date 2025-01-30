import dayjs, { ManipulateType } from "dayjs";
import { Candle, Symbols, Timeframe } from "../constants";
import { Binance } from "../exchanges";
import { timeframeToMs } from "../utils";

// Get Crypto Candles
export const getCandles = async (
  symbol: Symbols,
  timeframe: Timeframe,
  count: number
): Promise<Array<Candle>> => {
  const timeframeMs = timeframeToMs(timeframe);
  const since = dayjs()
    .subtract(count * timeframeMs, "milliseconds")
    .valueOf();
  const ohlcv = await Binance.fetchOHLCV(symbol, timeframe, since);
  return ohlcv
    .slice(-count)
    .map(([timestamp, open, high, low, close, volume], index) => ({
      id: index,
      timestamp: dayjs(timestamp).format("YYYY-MM-DD HH:mm:ss"),
      open: open as number,
      high: high as number,
      low: low as number,
      close: close as number,
      volume: volume as number,
    }));
};
