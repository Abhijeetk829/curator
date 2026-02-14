import { BadgeType } from "../types";
import styles from "./Badge.module.scss";

export default function Badge({ badge }: { badge: BadgeType | undefined }) {
  let type = "";
  if (badge === "Trending") type = "trending";
  if (badge === "Bestseller") type = "bestseller";
  if (badge === "LimitedTimeDeal") type = "limitedTimeDeal";
  if (badge === "AmazonChoice") type = "amazonChoice";

  let badgeName = "";
  if (type === "trending") badgeName = "Trending";
  else if (type === "bestseller") badgeName = "#1 Bestseller";
  else if (type === "limitedTimeDeal") badgeName = "Limited Time Deal";
  else if (type === "amazonChoice") badgeName = "Amazon's Choice";

  const className = `${styles.badge} ${styles[type]}`;
  return badge ? <span className={className}>{badgeName}</span> : null;
}
