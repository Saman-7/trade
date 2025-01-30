export type Divergence = { type: "positive" | "negative"; index: number };

export const calculateDivergence = (
  prices: Array<number>,
  rsi: Array<number>
): Array<Divergence> => {
  return prices.reduce((divergences: Array<Divergence>, price, index) => {
    if (index === 0) return divergences;
    // Positive Divergence
    if (price < prices[index - 1] && rsi[index] > rsi[index - 1]) {
      divergences.push({ type: "positive", index });
    }
    // Negative Divergence
    else if (price > prices[index - 1] && rsi[index] < rsi[index - 1]) {
      divergences.push({ type: "negative", index });
    }
    return divergences;
  }, []);
};
