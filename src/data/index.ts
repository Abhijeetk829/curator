import { Product } from "../types";
import { isDev } from "../utils";

const getProdData = (): Product[] => {
  const modules = import.meta.glob("./json/*.json", { eager: true });
  return Object.values(modules)
    .map((m: any) => m.default)
    .flat();
};

// The below function outputs dev data to browser
// If testing on latest data, enable the script to use
// latest data by using this command in browser's console
//
// localStorage.setItem("devDataMode", "latest")
//
// By default the browser will load all data
const getDevData = (): Product[] => {
  const devDataMode = localStorage.getItem("devDataMode");
  const devModules = import.meta.glob("../../utils/data/raw/*.json", {
    eager: true,
  });
  const combinedDevData = Object.values(devModules).map((m: any) => m.default);
  const allChunks = combinedDevData.flat();
  const lastChunk = combinedDevData[combinedDevData.length - 1];
  return devDataMode === "latest" ? lastChunk : allChunks;
};

const combinedData = isDev() ? getDevData() : getProdData();

export { default as tabs } from "./tabs.json";
export { combinedData as data };
