import { readFileSync, writeFileSync } from "fs";

const titles = [
  {
    id: "h4omr4",
    name: "Ascension Cute Couple Miniature Figurine – Valentine Edition",
  },
  {
    id: "m745n8",
    name: "Ascension Romantic Couple Figurine Set – Living Room Decor",
  },
  {
    id: "b5nx2m",
    name: "Tied Ribbons Romantic Couple Statue – Wedding Anniversary Decor",
  },
  {
    id: "ctjzll",
    name: "Artvibes In This Home MDF Wooden Wall Hanger Quote Decor",
  },
  {
    id: "d8uk3z",
    name: "Amazon Basics Elephant Family Ceramic Figurines Set of 3",
  },
  {
    id: "96s1t5",
    name: "Ceramic Rabbit Figurines Set of 2 – Modern Home Decor",
  },
  {
    id: "dn4gu7",
    name: "Ceramic Thinker Men Statue Set of 3 – Modern Art Sculpture",
  },
  {
    id: "9esgbj",
    name: "eCraftIndia Kissing Couple Valentine Showpiece Decor",
  },
  {
    id: "4qp6s1",
    name: "ZOCI VOCI Personalized Acrylic LED Lamp – Romantic BW Engraving",
  },
  {
    id: "29wggz",
    name: "Crocon 7 Chakra Crystal Bonsai Tree with Golden Money Bag Base",
  },
  {
    id: "2lj4s9",
    name: "Custom LED Photo Frame – Personalized Wedding & Valentine Gift",
  },
  {
    id: "zdbevn",
    name: "20 Years Together Anniversary Coffee Mug – Est. 2005 Couple Gift",
  },
  {
    id: "f2vl4g",
    name: "eCraftIndia Teddy Bear Musical Valentine Showpiece Set of 4",
  },
  {
    id: "6zhcsx",
    name: "Valentines Love Token Cat Magnet Photo Frame for Couples",
  },
  {
    id: "c5w12h",
    name: "Amazon Basics Golden Reindeer Resin Sculptures Set of 2",
  },
  {
    id: "n4ti8s",
    name: "ZOCI VOCI RGB Personalized Valentine LED Photo Frame",
  },
  {
    id: "fw7il1",
    name: "CraftVatika Love Couple Showpiece with LED Light Decor",
  },
  {
    id: "oje0c6",
    name: "3rd Anniversary Cactus Mug – Valentines Day Couple Gift",
  },
  {
    id: "wllooa",
    name: "AXU Craftial I Love You Couple Silicone Mold – Romantic Theme",
  },
  {
    id: "x6vppe",
    name: "DAYS Mug of PositivTea – Motivational Self Care Gift for Her",
  },
  {
    id: "cnt3bm",
    name: "ZART Polyresin Family Couple Showpiece – Premium Home Decor",
  },
  { id: "g06qmt", name: "ExclusiveLane Old Couple Decorative Resin Showpiece" },
];

let oldData = JSON.parse(
  readFileSync("./data_4_27_feb_26_cleaned.json", "utf-8"),
);
oldData.map((e) => {
  let title = titles.find((t) => t.id === e.id);
  if (title) {
    return {
      ...e,
      name: title.name,
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
