import { asString, generateCsv, mkConfig } from "export-to-csv";
import { readFileSync, writeFile } from "fs";
import { Buffer } from "node:buffer";

const headers = [
  {
    key: "title",
    displayLabel: "Title",
  },
  {
    key: "mediaURL",
    displayLabel: "Media URL",
  },
  {
    key: "pinterestBoard",
    displayLabel: "Pinterest board",
  },
  {
    key: "thumbnail",
    displayLabel: "Thumbnail",
  },
  {
    key: "description",
    displayLabel: "Description",
  },
  {
    key: "link",
    displayLabel: "Link",
  },
  {
    key: "publishDate",
    displayLabel: "Publish date",
  },
  {
    key: "keywords",
    displayLabel: "Keywords",
  },
];

const fileName = "data_3";
const publishDateTime = "2026-02-24T11:00:00";
const sourceFile = `../src/data/${fileName}.json`;
const csvFileName = sourceFile.split("/").slice(-1)[0].split(".")[0] + ".csv";
let data = JSON.parse(readFileSync(sourceFile, "utf-8"));
const csvConfig = mkConfig({ useKeysAsHeaders: false, columnHeaders: headers });
const baseUrl = "https://onlypresents.store/product/";

data = data.map((item) => ({
  title: item.name,
  mediaURL: item.image,
  pinterestBoard: item.tab,
  thumbnail: "",
  description: item.description,
  link: `${baseUrl}${item.id}`,
  publishDate: publishDateTime,
  keywords: item.tags.join(", "),
}));

// Converts your Array<Object> to a CsvOutput string based on the configs
const csv = generateCsv(csvConfig)(data);
const csvBuffer = new Uint8Array(Buffer.from(asString(csv)));

writeFile(csvFileName, csvBuffer, (err) => {
  if (err) throw err;
  console.log("file saved: ", csvFileName);
});
