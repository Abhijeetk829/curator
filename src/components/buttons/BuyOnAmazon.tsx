import { faAmazon } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./BuyOnAmazon.module.scss";

interface BuyOnAmazonProps {
  amazonUrl: string;
  className?: string;
}

export const BuyOnAmazon = ({ amazonUrl, className }: BuyOnAmazonProps) => {
  return (
    <button
      className={`${styles.button} ${className || ""}`}
      onClick={() => window.open(amazonUrl, "_blank")}
    >
      <FontAwesomeIcon icon={faAmazon} size="xl" />
      Buy on Amazon
    </button>
  );
};

BuyOnAmazon.displayName = "BuyOnAmazon";

export default BuyOnAmazon;
