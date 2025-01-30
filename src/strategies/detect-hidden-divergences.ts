import {
  calculateRSI,
  calculateHiddenDivergence,
  HiddenDivergence,
} from "../indicators";

export const detectHiddenDivergences = async (
  closePrices: Array<number>,
  period: number
): Promise<Array<HiddenDivergence>> => {
  try {
    const rsi = await calculateRSI(closePrices, period);
    return calculateHiddenDivergence(closePrices.slice(-rsi.length), rsi);
  } catch (error) {
    console.error(error);
    return [];
  }
};
