import { Product } from "../types";
import { AD_NAME } from "./env";

export function injectAds(products: Product[], frequency: number): Product[] {
  const result: Product[] = [];

  let adIndex = 0;

  // first ad position
  let nextAdIndex =
    frequency + Math.floor(Math.random() * Math.floor(frequency / 2));

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    result.push(product);

    if (i >= nextAdIndex) {
      result.push({
        name: AD_NAME,
        id: `ad-${adIndex++}`,
        badge: "Sponsored",
      } as Product);

      // schedule next ad
      nextAdIndex =
        i + frequency + Math.floor(Math.random() * Math.floor(frequency / 2));
    }
  }

  return result;
}

export default injectAds;
