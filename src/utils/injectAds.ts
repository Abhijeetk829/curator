import { Product } from "../types";
import { AD_NAME } from "./env";

export function injectAds(products: Product[], frequency: number): Product[] {
  const result: Product[] = [];

  let counter = 0;

  for (const product of products) {
    result.push(product);

    counter++;

    if (counter >= frequency + Math.floor(Math.random() * 3)) {
      let ad = {
        name: AD_NAME,
        id: crypto.randomUUID(),
        badge: "Sponsored",
      } as Product;
      result.push(ad);

      counter = 0;
    }
  }

  return result;
}

export default injectAds;
