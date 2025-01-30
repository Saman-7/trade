export type HiddenDivergence = {
  type: "positive-hidden" | "negative-hidden";
  index: number;
};

export const calculateHiddenDivergence = (
  prices: Array<number>,
  rsi: Array<number>
): Array<HiddenDivergence> => {
  return prices.reduce((divergences: Array<HiddenDivergence>, price, index) => {
    if (index === 0) return divergences;
    // Positive Hidden Divergence
    if (price > prices[index - 1] && rsi[index] < rsi[index - 1]) {
      divergences.push({ type: "positive-hidden", index });
    }
    // Negative Hidden Divergence
    else if (price < prices[index - 1] && rsi[index] > rsi[index - 1]) {
      divergences.push({ type: "negative-hidden", index });
    }
    return divergences;
  }, []);
};
