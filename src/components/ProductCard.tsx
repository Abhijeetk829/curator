import { isMobile } from "react-device-detect";
import { Product } from "../types";
import Badge from "./Badge";
import styles from "./ProductCard.module.scss";

export default function ProductCard({
  product,
  onClick,
}: {
  product: Product;
  onClick: () => void;
}) {
  return (
    <div
      className={`${styles.card} ${isMobile ? styles.cardMobile : ""}`}
      onClick={onClick}
    >
      <img className={styles.image} src={product.image} />
      <div className={styles.info}>
        <div className={styles.name}>{product.name}</div>
        <Badge badge={product.badge || undefined} />
        {/* <div className={styles.price}>{`\u20b9 ${product.price}`}</div> */}
      </div>
    </div>
  );
}
