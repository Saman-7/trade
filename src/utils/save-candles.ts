import fs from "fs/promises";
import { Candle, Timeframe } from "../constants";
import { ensureDirectoryExists, getFilePath } from "./file-utils";

export const saveCandlesToFile = async (
  filename: Timeframe,
  candles: Array<Candle>
) => {
  const customDir = "data";
  try {
    // Create data directory if it doesn't exist
    await ensureDirectoryExists(customDir);
    // Write candles to file
    await fs.writeFile(
      getFilePath(customDir, `${filename}.json`),
      JSON.stringify(candles, null, 2),
      "utf-8"
    );
    console.log(`✅ Candles Saved for ${filename}`);
  } catch (error) {
    console.error("❌ Error Saving Candles:", error);
  }
};
