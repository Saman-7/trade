import tulind from "tulind";

export const calculateRSI = (
  closePrices: Array<number>,
  period: number
): Promise<Array<number>> => {
  return new Promise((resolve, reject) => {
    tulind.indicators.rsi.indicator(
      [closePrices],
      period,
      (err: any, result: any) => {
        if (err) {
          reject("❌ Error calculating RSI: " + err);
        } else {
          resolve(result[0]);
        }
      }
    );
  });
};
