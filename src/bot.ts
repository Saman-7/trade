import { Symbols, Timeframe } from "./constants";
import { getCandles } from "./services";
import { doesFileExist, saveCandlesToFile } from "./utils";

console.log("🤖 Bot Starting ...");

////////////////////////////////////////////////////////////////////////////////////////

// Save Candles for Timeframes
const saveTimeframes: Array<Timeframe> = ["1m", "3m", "5m"];
for (const timeframe of saveTimeframes) {
  const customDir = "data";
  const exists = await doesFileExist(customDir, `${timeframe}.json`);
  if (!exists) {
    console.log(`⚙️  No Candles Found for ${timeframe}, Creating ...`);
    const candles = await getCandles(Symbols.BTC, timeframe, "days", 1);
    await saveCandlesToFile(timeframe, candles);
  } else {
    console.log(`✅ Candles Found for ${timeframe}, Skipping ...`);
  }
}

////////////////////////////////////////////////////////////////////////////////////////

console.log("🤖 Bot Ending ...");
