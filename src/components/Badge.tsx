import { BadgeType } from "../types";
import { returnBadgeName } from "../utils";
import styles from "./Badge.module.scss";

export default function Badge({ badge }: { badge: BadgeType | undefined }) {
  if (!badge) return null;

  const type = badge?.toLowerCase();
  const badgeName = returnBadgeName(type);

  const className = `${styles.badge} ${styles[type]}`;
  return badge ? <span className={className}>{badgeName}</span> : null;
}
