import { Footer, NavbarSimple } from "../components";
import styles from "./LegalPage.module.scss";

export default function Contact() {
  return (
    <>
      <NavbarSimple />
      <div className={styles.page}>
        <h1 className={styles.title}>Contact Us</h1>

        <div className={styles.section}>
          <p>
            If you have questions, feedback, or partnership inquiries, we would
            love to hear from you.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Email</h2>

          <p>
            <span className={styles.email}>onlypresents.store@gmail.com</span>
          </p>
        </div>

        <div className={styles.section}>
          <h2>Feedback</h2>

          <p>
            If you have suggestions or product recommendations for OnlyPresents,
            please reach out and we will review them for future updates.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Response Time</h2>

          <p>We aim to respond to most inquiries within 2-3 business days.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
