import { Footer, NavbarSimple } from "../components";
import styles from "./LegalPage.module.scss";

export default function Terms() {
  return (
    <>
      <NavbarSimple />
      <div className={styles.page}>
        <h1 className={styles.title}>Terms of Service</h1>

        <div className={styles.section}>
          <h2>Website Purpose</h2>
          <p>
            OnlyPresents is a gift discovery platform that showcases curated
            products available from third-party retailers.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Product Information</h2>
          <p>
            We strive to display accurate information, but pricing,
            availability, and product details may change on retailer websites.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Affiliate Links</h2>
          <p>
            Some links on this website are affiliate links. If a purchase is
            made through these links, we may earn a small commission.
          </p>
        </div>

        <div className={styles.section}>
          <h2>External Websites</h2>
          <p>
            OnlyPresents may link to third-party websites. We do not control or
            endorse the content on those sites.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Limitation of Liability</h2>
          <p>
            OnlyPresents is provided for informational purposes only. We are not
            responsible for any issues related to purchases made through
            third-party retailers.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
