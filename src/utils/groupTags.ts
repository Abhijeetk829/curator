export const groupTags = (tags: string[]) => {
  const groups: Record<string, string[]> = {
    recipient: [],
    occasion: [],
    product: [],
    aesthetic: [],
    lifestyle: [],
    price: [],
    material: [],
    category: [],
    other: [],
  };

  tags.forEach((tag) => {
    const t = tag.toLowerCase();

    /* -----------------------------
       Recipient
    ----------------------------- */
    if (
      t.includes("her") ||
      t.includes("him") ||
      t.includes("couple") ||
      t.includes("friend") ||
      t.includes("wife") ||
      t.includes("husband")
    ) {
      groups.recipient.push(tag);
    } else if (
      /* -----------------------------
       Occasion
    ----------------------------- */
      t.includes("valentine") ||
      t.includes("holi") ||
      t.includes("anniversary") ||
      t.includes("birthday") ||
      t.includes("festival")
    ) {
      groups.occasion.push(tag);
    } else if (
      /* -----------------------------
       Price / Budget
    ----------------------------- */
      t.includes("under") ||
      t.includes("₹") ||
      t.includes("budget") ||
      t.includes("premium")
    ) {
      groups.price.push(tag);
    } else if (
      /* -----------------------------
       Aesthetic / Mood
    ----------------------------- */
      t.includes("romantic") ||
      t.includes("cute") ||
      t.includes("love") ||
      t.includes("luxury") ||
      t.includes("modern") ||
      t.includes("minimal") ||
      t.includes("quirky")
    ) {
      groups.aesthetic.push(tag);
    } else if (
      /* -----------------------------
       Lifestyle / Intent
    ----------------------------- */
      t.includes("self care") ||
      t.includes("spiritual") ||
      t.includes("feng") ||
      t.includes("healing")
    ) {
      groups.lifestyle.push(tag);
    } else if (
      /* -----------------------------
       Material / Composition
    ----------------------------- */
      t.includes("ceramic") ||
      t.includes("acrylic") ||
      t.includes("silicone") ||
      t.includes("wood") ||
      t.includes("metal")
    ) {
      groups.material.push(tag);
    } else if (
      /* -----------------------------
       Product Type
    ----------------------------- */
      t.includes("mug") ||
      t.includes("lamp") ||
      t.includes("perfume") ||
      t.includes("decor") ||
      t.includes("jewelry") ||
      t.includes("chocolate") ||
      t.includes("soft toy") ||
      t.includes("snacks") ||
      t.includes("accessories")
    ) {
      groups.product.push(tag);
    } else if (t.includes("gift") || t.includes("set")) {
      /* -----------------------------
       Broad Category
    ----------------------------- */
      groups.category.push(tag);
    } else {
      /* -----------------------------
       Fallback
    ----------------------------- */
      groups.other.push(tag);
    }
  });

  return groups;
};

groupTags.displayName = "groupTags";

export default groupTags;
