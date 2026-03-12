import { Product } from "../../types";
import { GRID_AD_SLOT } from "../../utils/env";
import Badge from "../Badge";
import AdsenseAd from "./AdsenseAd";
import styles from "./GridAd.module.scss";

export default function GridAd({ product }: { product: Product }) {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <Badge badge={product.badge} />
      </div>
      <AdsenseAd slot={GRID_AD_SLOT} format="rectangle" />
    </div>
  );
}
