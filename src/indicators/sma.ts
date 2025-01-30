import tulind from "tulind";

export const calculateSMA = (
  closePrices: Array<number>,
  period: number
): Promise<Array<number>> => {
  return new Promise((resolve, reject) => {
    tulind.indicators.sma.indicator(
      [closePrices],
      period,
      (err: any, result: any) => {
        if (err) {
          reject("❌ Error Calculating SMA: " + err);
        } else {
          resolve(result[0]);
        }
      }
    );
  });
};
