import { FaStar, FaStarHalf } from "react-icons/fa";
import { Product } from "../types/types";
import styles from "./ProductModal.module.scss";

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

  const formatIndianNumber = (num: number) => {
    let str = num.toString();

    if (str.length <= 3) return str;
    let lastThree = str.slice(-3);
    let rest = str.slice(0, -3);
    let result = "";

    while (rest.length > 2) {
      result = "," + rest.slice(-2) + result;
      rest = rest.slice(0, -2);
    }
    result = rest + result;
    return result + "," + lastThree;
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} color="#ffc107" className={styles.star} />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <FaStarHalf key={i} color="#ffc107" className={styles.star} />,
        );
      } else {
        stars.push(<FaStar key={i} color="#e0e0e0" className={styles.star} />);
      }
    }
    return stars;
  };

  const renderRatings = product.rating !== undefined && (
    <div className={styles.rating}>
      <div className={styles.ratingValue}>{product.rating.toFixed(1)}</div>
      <div className={styles.stars}>{renderStars(product.rating)}</div>
      <div className={styles.userReviews}>
        ({formatIndianNumber(product.userReviews || 0)} user reviews)
      </div>
    </div>
  );

  const buttonsContainer = (
    <div className={styles.buttons}>
      <button
        className={styles.buy}
        onClick={() => window.open(product.amazonLink, "_blank")}
      >
        Buy on Amazon
      </button>
      <button
        className={styles.pinterest}
        onClick={() => window.open(product.pinterestPin, "_blank")}
      >
        Pinterest Pin
      </button>
    </div>
  );

  return (
    <div className={styles.overlay} onClick={close}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <img src={product.image} className={styles.image} />
        <div className={styles.title}>
          <span>{product.name}</span>
          {product.isBestseller && (
            <div className={styles.goldenBadge}>Bestseller</div>
          )}
        </div>
        <div className={styles.descriptionAndRating}>
          <div className={styles.desc}>{product.description}</div>
        </div>
        {renderRatings}
        <span className={styles.price}>{`\u20b9${product.price}`}</span>
        {buttonsContainer}
      </div>
    </div>
  );
}
