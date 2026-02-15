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
    <div className={styles.card} onClick={onClick}>
      <img className={styles.image} src={product.image} />
      <div className={styles.info}>
        <div className={styles.name}>{product.name}</div>
        <div className={styles.section}>
          <div className={styles.price}>{`\u20b9 ${product.price}`}</div>
          <Badge badge={product.badge || undefined} />
        </div>
      </div>
    </div>
  );
}
