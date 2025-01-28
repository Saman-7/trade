export type Symbols = (typeof Symbols)[keyof typeof Symbols];

export const Symbols = {
  BTC: "BTC/USDT",
} as const;
