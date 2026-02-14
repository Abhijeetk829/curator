import { FaStar, FaStarHalf } from "react-icons/fa";
import { formatNumber } from "../utils";
import styles from "./Rating.module.scss";

interface RatingProps {
  rating: number;
  userReviews: number;
}

function Rating({ rating, userReviews }: RatingProps) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<FaStar key={i} color="#ffc107" />);
    } else if (i === fullStars && hasHalfStar) {
      stars.push(<FaStarHalf key={i} color="#ffc107" />);
    } else {
      stars.push(<FaStar key={i} color="#e0e0e0" />);
    }
  }

  return (
    rating !== undefined && (
      <div className={styles.rating}>
        <div className={styles.ratingValue}>{rating.toFixed(1)}</div>
        <div className={styles.stars}>{stars}</div>
        <div className={styles.userReviews}>
          ({formatNumber(userReviews)} user reviews)
        </div>
      </div>
    )
  );
}

Rating.displayName = "Rating";

export default Rating;
