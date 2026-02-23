import data1 from "./data_1.json";
import data2 from "./data_2.json";
import data3 from "./data_3_cleaned.json";

const combinedData = [...data1, ...data2, ...data3];

export { default as tabs } from "./tabs.json";
export { combinedData as data };
