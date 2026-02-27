import { readFileSync, writeFileSync } from "fs";

let oldData = JSON.parse(
  readFileSync("./data_4_27_feb_26_cleaned.json", "utf-8"),
);
oldData.map((e) => {
  if (
    e.pinterestLink === "valentine" &&
    e.tabs.find((t) => t !== "valentine")
  ) {
    return {
      ...e,
      tabs: e.tabs.push(e.pinterestLink),
    };
  } else {
    return e;
  }
});
writeFileSync(
  "./data_4_27_feb_26_cleaned_2.json",
  JSON.stringify(oldData),
  "utf-8",
);
