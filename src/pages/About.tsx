import { Footer, NavbarSimple } from "../components";
import styles from "./LegalPage.module.scss";

export default function About() {
  return (
    <>
      <NavbarSimple />
      <div className={styles.page}>
        <h1 className={styles.title}>About OnlyPresents</h1>

        <div className={styles.section}>
          <p>
            OnlyPresents is a curated discovery platform designed to help people
            find thoughtful and unique gift ideas quickly and easily.
          </p>

          <p>
            With thousands of products available online, finding the perfect
            present can be overwhelming. OnlyPresents simplifies that process by
            showcasing carefully selected products across categories like gifts
            for couples, gifts for her, gifts for him, holiday specials, and
            budget-friendly picks.
          </p>
        </div>

        <div className={styles.section}>
          <h2>How OnlyPresents Works</h2>

          <p>
            OnlyPresents does not sell products directly. Instead, we curate and
            showcase products available on trusted online marketplaces. When you
            click a product, you are redirected to the retailer’s website where
            you can complete your purchase securely.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Affiliate Disclosure</h2>

          <p>
            Some links on OnlyPresents may be affiliate links. This means we may
            earn a small commission if you make a purchase through those links,
            at no additional cost to you.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Our Mission</h2>

          <p>
            Our mission is to make discovering meaningful gifts simple,
            inspiring, and enjoyable for everyone.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
