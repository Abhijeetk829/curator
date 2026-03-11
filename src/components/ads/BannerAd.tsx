import { BANNER_AD_SLOT } from "../../utils/env";
import AdsenseAd from "./AdsenseAd";
import styles from "./BannerAd.module.scss";

export default function BannerAd() {
  return (
    <div className={styles.bannerAdMargin}>
      <AdsenseAd
        slot={BANNER_AD_SLOT}
        // style={{ display: "inline-block", width: "728px", height: "90px" }}
      />
    </div>
  );
}
