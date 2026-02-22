import data1 from "./data_1.json";
import data2 from "./data_2.json";

const combinedData = [...data1, ...data2];

export { default as tabs } from "./tabs.json";
export { combinedData as data };
