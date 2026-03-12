import { Product } from "../types";
import {
  AD_NAME,
  BANNER_AD_SLOT,
  CAPUB,
  DESKTOP_AD_FREQUENCY,
  GRID_AD_SLOT,
  IS_DEV,
  MOBILE_AD_FREQUENCY,
} from "./env";

export function injectAds(products: Product[], frequency: number): Product[] {
  console.log("injecting ads", frequency);
  console.log(
    IS_DEV,
    CAPUB,
    MOBILE_AD_FREQUENCY,
    DESKTOP_AD_FREQUENCY,
    BANNER_AD_SLOT,
    GRID_AD_SLOT,
    AD_NAME,
  );
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
