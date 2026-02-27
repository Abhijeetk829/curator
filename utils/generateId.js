import { readdirSync, readFileSync, writeFileSync } from "fs";

const sourceFolder = "./data/raw/";
let sourceFile = readdirSync(sourceFolder);
sourceFile = `${sourceFolder}${sourceFile[sourceFile.length - 1]}`;
const processedFileName = sourceFile.split("/").slice(-1)[0].split(".")[0];
let data = JSON.parse(readFileSync(`${sourceFile}`, "utf-8"));

export const generateId = (length = 6) => {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < length; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }
  return id;
};

data = data.map((item) => ({
  ...item,
  id: generateId(),
}));

writeFileSync(
  `${sourceFolder}${processedFileName}_cleaned.json`,
  JSON.stringify(data, null, 2),
  "utf-8",
);
