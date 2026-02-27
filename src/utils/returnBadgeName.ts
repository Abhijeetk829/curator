export const returnBadgeName = (badgeType: string): string => {
  switch (badgeType) {
    case "trending":
      return "Trending";
    case "bestseller":
      return "#1 Bestseller";
    case "limitedtimedeal":
      return "Limited Time Deal";
    case "amazonchoice":
      return "Amazon's Choice";
    default:
      return "";
  }
};

returnBadgeName.displayName = "returnBadgeName";

export default returnBadgeName;
