import { readFileSync, writeFileSync } from "fs";

let data = JSON.parse(readFileSync("src/data/data_2.json", "utf-8"));

const generateId = (length = 6) => {
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
  "src/data/data_2_cleaned.json",
  JSON.stringify(data, null, 2),
  "utf-8",
);
