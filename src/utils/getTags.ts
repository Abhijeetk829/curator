import { Product } from "../types";

export const getTags = (data: Product[]) => {
  if (!data || data.length === 0) return [];
  const tagSet = new Set<string>();

  data.forEach((product: Product) => {
    if (product.tags && product.tags.length > 0) {
      product.tags.forEach((tag: string) => {
        tagSet.add(tag.toLowerCase()); // normalize
      });
    }
  });

  const uniqueTags = Array.from(tagSet);
  return uniqueTags;
};

getTags.displayName = "getTags";

export default getTags;
