import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import MuiRating from "@mui/material/Rating";
import { formatNumber } from "../utils";
import styles from "./Rating.module.scss";

interface RatingProps {
  rating: number;
  userReviews: number;
}

function Rating({ rating, userReviews }: RatingProps) {
  if (rating === undefined) return null;

  return (
    <div className={styles.rating}>
      {/* numeric rating */}
      <div className={styles.ratingValue}>{rating.toFixed(1)}</div>

      {/* stars */}
      <MuiRating
        value={rating}
        precision={0.1}
        readOnly
        icon={<StarRoundedIcon fontSize="inherit" />}
        emptyIcon={<StarBorderRoundedIcon fontSize="inherit" />}
        className={styles.stars}
      />

      {/* reviews */}
      <div className={styles.userReviews}>
        ({formatNumber(userReviews)} reviews)
      </div>
    </div>
  );
}

Rating.displayName = "Rating";
export default Rating;
