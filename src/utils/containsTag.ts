import { Product } from "../types";

export const containsTag = (tags: string[], product: Product) => {
  if (tags.length === 0) return true;
  let containsTag = false;
  for (let i = 0; i <= tags.length; i++) {
    if (i < tags.length) {
      if (product.tags?.includes(tags[i])) {
        containsTag = true;
      }
    } else {
      return containsTag;
    }
  }
};

containsTag.displayName = "containsTag";

export default containsTag;
