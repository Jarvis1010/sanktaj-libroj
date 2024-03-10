import { convertFromEsperantoXSystem } from "./routeutils";
import fs from "fs";
import path from "path";

const pathArg = process.argv.at(-1) ?? "";

const fileAtPath = path.join(pathArg);

console.log(`Converting file ${fileAtPath}...`);

const fileExistState = fs.existsSync(fileAtPath) ? "exists" : "doesn't exist";

if (fileExistState === "doesn't exist") {
  console.log(`File doesn't exist at path ${fileAtPath}`);
  process.exit(1);
}

const fileContent = fs.readFileSync(fileAtPath, "utf8");

const convertedContent = convertFromEsperantoXSystem(fileContent);

fs.writeFileSync(fileAtPath, convertedContent);

console.log(`File converted successfully`);
