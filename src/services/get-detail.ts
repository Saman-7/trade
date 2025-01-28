import { Ticker } from "ccxt";
import { Binance } from "../exchanges";
import { Symbols } from "../constants";

// Get Crypto Detail
export const getDetail = async (
  symbol: Symbols,
  params?: {}
): Promise<Ticker> => {
  return await Binance.fetchTicker(symbol, params);
};
