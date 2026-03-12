import { Product } from "../types";
import { AD_NAME } from "./env";

export function injectAds(products: Product[], frequency: number): Product[] {
  const result: Product[] = [];

  let counter = 0;
  let adIndex = 0;

  for (const product of products) {
    result.push(product);
    counter++;

    if (counter >= frequency) {
      result.push({
        name: AD_NAME,
        id: `ad-${adIndex++}`, // stable id
        badge: "Sponsored",
      } as Product);

      counter = 0;
    }
  }

  return result;
}

export default injectAds;
