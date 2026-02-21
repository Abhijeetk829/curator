import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { isMobile } from "react-device-detect";
import { Product } from "../types";
import Badge from "./Badge";
import { BuyOnAmazon, ShareOnWhatsapp } from "./buttons";
import { CopyLink } from "./CopyLink";
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
        <BuyOnAmazon amazonUrl={product.amazonLink} className={styles.buy} />
        <ShareOnWhatsapp
          className={styles.buy}
          productId={product.id}
          productName={product.name}
        />
      </div>
      <button className={styles.close} onClick={handleClose}>
        Close
      </button>
    </>
  );

  return (
    <div className={styles.overlay} onClick={handleClose}>
      <div
        className={`${styles.modal} ${isMobile ? styles.modalMobile : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeBtn}>
          <CloseRoundedIcon
            onClick={handleClose}
            className={styles.closeIcon}
          />
        </button>
        <div className={`${styles.imageContainer}`}>
          <img src={product.image} className={styles.image} />
          <CopyLink productId={product.id} />
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
