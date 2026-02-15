import { Product } from "../types";
import Badge from "./Badge";
import styles from "./ProductModal.module.scss";
import Rating from "./Rating";

interface ProductModalProps {
  product: Product | null;
  close: () => void;
  onClose?: () => void;
}

export default function ProductModal({
  product,
  close,
  onClose,
}: ProductModalProps) {
  if (!product) return null;

  const handleClose = () => {
    onClose?.();
    close();
  };

  const buttonsContainer = (
    <>
      <div className={styles.buttons}>
        <button
          className={styles.buy}
          onClick={() => window.open(product.amazonLink, "_blank")}
        >
          Buy on Amazon
        </button>
        <button
          className={styles.pinterest}
          onClick={() => window.open(product.pinterestLink, "_blank")}
        >
          Pinterest Pin
        </button>
      </div>
      <button className={styles.close} onClick={handleClose}>
        Close
      </button>
    </>
  );

  return (
    <div className={styles.overlay} onClick={handleClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.imageContainer}>
          <img src={product.image} className={styles.image} />
        </div>
        <div className={styles.content}>
          <div className={styles.title}>{product.name}</div>

          <div className={styles.descriptionAndRating}>
            <div className={styles.desc}>{product.description}</div>
          </div>

          <Rating
            rating={product.rating || 0}
            userReviews={product.userReviews || 0}
          />

          <Badge badge={product.badge || undefined} />

          <div className={styles.price}>{`\u20b9${product.price}`}</div>
          {buttonsContainer}
        </div>
      </div>
    </div>
  );
}
