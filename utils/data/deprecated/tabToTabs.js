import fs from "fs";

/*
  Tag corrections for previously identified misclassified products.
  ONLY these IDs will have their tags replaced.
*/
const correctedTagsMap = {
  "31vo2j": [
    "gift set",
    "perfume",
    "unisex",
    "for her",
    "for him",
    "under 500",
  ],
  x6vppe: ["mug", "motivational", "self care", "for her", "under 500"],
  moo7pq: ["spiritual", "home decor", "premium", "housewarming gift"],
  d8uk3z: ["home decor", "family decor", "premium"],
  "96s1t5": ["home decor", "modern decor", "gift set"],
  mipuy5: ["home decor", "premium", "quirky decor"],
  "7ys1g1": ["snacks", "gift set", "under 500"],
  iswa85: ["gift set", "mug", "romantic", "for her", "couple", "premium"],
  "0zoz4d": ["home decor", "cute", "for her", "for him", "under 500"],
  hgrftj: ["home decor", "spiritual", "feng shui", "under 500"],
  "29wggz": ["home decor", "spiritual", "feng shui", "under 500"],
  uycyqi: ["home decor", "spiritual", "feng shui", "premium"],
  dn4gu7: ["home decor", "modern decor", "under 500"],
};

const files = [
  "data_1.json",
  "data_2.json",
  "data_3.json",
  "data_4_27_feb_26_cleaned.json",
];

files.forEach((file) => {
  const data = JSON.parse(fs.readFileSync(file, "utf8"));

  const updated = data.map((item) => {
    const tabs = new Set();

    /* ------------------------------
       1. Occasion (from original tab)
    --------------------------------*/
    if (item.tab === "valentine") tabs.add("valentine");
    if (item.tab === "holi") tabs.add("holi");
    if (item.tab === "couple") tabs.add("couple");
    if (item.tab === "girlfriend") tabs.add("girlfriend");
    if (item.tab === "boyfriend") tabs.add("boyfriend");

    /* ------------------------------
       2. Recipient logic (from tags)
    --------------------------------*/
    if (item.tags?.includes("couple")) tabs.add("couple");
    if (item.tags?.includes("for her")) tabs.add("girlfriend");
    if (item.tags?.includes("for him")) tabs.add("boyfriend");

    /* ------------------------------
       3. Price logic
    --------------------------------*/
    if (item.price <= 499) tabs.add("under499");

    /* ------------------------------
       4. Remove old tab
    --------------------------------*/
    const { tab, ...rest } = item;

    /* ------------------------------
       5. Correct tags only if ID exists
    --------------------------------*/
    const newTags = correctedTagsMap[item.id]
      ? correctedTagsMap[item.id]
      : item.tags;

    return {
      ...rest,
      tags: newTags,
      tabs: Array.from(tabs),
    };
  });

  fs.writeFileSync(`./tabs/${file}`, JSON.stringify(updated, null, 2));
});

console.log("✅ Tabs converted and selective tag corrections applied.");
