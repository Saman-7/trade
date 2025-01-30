import dayjs, { ManipulateType } from "dayjs";
import { Candle, Symbols, Timeframe } from "../constants";
import { Binance } from "../exchanges";

// Get Crypto Candles
export const getCandles = async (
  symbol: Symbols,
  timeframe: Timeframe,
  time: ManipulateType,
  lookback: number
): Promise<Array<Candle>> => {
  const since = dayjs().subtract(lookback, time).valueOf();
  const ohlcv = await Binance.fetchOHLCV(symbol, timeframe, since);
  return ohlcv.map(([timestamp, open, high, low, close, volume]) => ({
    timestamp: dayjs(timestamp).format("YYYY-MM-DD HH:mm:ss"),
    open: open as number,
    high: high as number,
    low: low as number,
    close: close as number,
    volume: volume as number,
  }));
};
