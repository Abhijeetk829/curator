import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { emptyDirectory } from "./emptyDirectory.js";

const outDir = "./data/processed/";
const dataFolder = `./data/raw`;
const fileBaseName = "data";
const fileContentsLimit = 30;

// read data files from source data folder
let files = readdirSync(dataFolder);
// recreate filepaths for all ready filenames
files = files.map((filename) => `${dataFolder}/${filename}`);
// read all file contents and merge it into one array
files = files
  .map((fileName) => JSON.parse(readFileSync(fileName, "utf-8")))
  .flat();
// calculate the number of files needed to create file chunks for all data
let fileCount = new Array(
  parseInt(files.length / fileContentsLimit) +
    (files.length % fileContentsLimit ? 1 : 0),
).fill({});
// create data chunks from the combined data
files = fileCount.map((v, i) =>
  files.slice(i * fileContentsLimit, (i + 1) * fileContentsLimit),
);

// empty the output folder
await emptyDirectory(outDir);
// write json files to output folder
files.map((contents, index) =>
  writeFileSync(
    `${outDir}${fileBaseName}_c_${index + 1}.json`,
    JSON.stringify(contents),
    {
      encoding: "utf-8",
    },
  ),
);
