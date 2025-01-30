import { calculateDivergence, calculateRSI, Divergence } from "../indicators";

export const detectDivergences = async (
  closePrices: Array<number>,
  period: number
): Promise<Array<Divergence>> => {
  try {
    const rsi = await calculateRSI(closePrices, period);
    return calculateDivergence(closePrices.slice(-rsi.length), rsi);
  } catch (error) {
    console.error(error);
    return [];
  }
};
