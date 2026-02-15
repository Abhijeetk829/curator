export const groupTags = (tags: string[]) => {
  const groups: any = {
    recipient: [],
    type: [],
    mood: [],
    budget: [],
    other: [],
  };

  tags.forEach((tag) => {
    const t = tag.toLowerCase();

    // recipient
    if (
      t.includes("her") ||
      t.includes("him") ||
      t.includes("couple") ||
      t.includes("friend")
    ) {
      groups.recipient.push(tag);
    }

    // budget
    else if (
      t.includes("under") ||
      t.includes("₹") ||
      t.includes("budget") ||
      t.includes("premium")
    ) {
      groups.budget.push(tag);
    }

    // mood
    else if (
      t.includes("romantic") ||
      t.includes("cute") ||
      t.includes("love") ||
      t.includes("luxury")
    ) {
      groups.mood.push(tag);
    }

    // product type
    else if (
      t.includes("mug") ||
      t.includes("lamp") ||
      t.includes("perfume") ||
      t.includes("gift") ||
      t.includes("decor") ||
      t.includes("jewelry") ||
      t.includes("chocolate") ||
      t.includes("soft toy") ||
      t.includes("set")
    ) {
      groups.type.push(tag);
    }

    // fallback
    else {
      groups.other.push(tag);
    }
  });

  return groups;
};

groupTags.displayName = "groupTags";

export default groupTags;
