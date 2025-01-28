import { Symbols } from "./constants";
import { getDetail } from "./services";

console.log("Bot Starting ...");

const details = await getDetail(Symbols.BTC);
console.log(details);

console.log("Bot Ending ...");
