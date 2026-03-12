import { Footer, NavbarSimple } from "../components";
import styles from "./LegalPage.module.scss";

export default function Privacy() {
  return (
    <>
      <NavbarSimple />
      <div className={styles.page}>
        <h1 className={styles.title}>Privacy Policy</h1>

        <div className={styles.section}>
          <p>
            Your privacy is important to us. This policy explains how
            OnlyPresents collects and uses information when you visit the
            website.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Information We Collect</h2>
          <p>
            OnlyPresents does not require users to create accounts or submit
            personal information to browse the website.
          </p>

          <p>Some technical information may be collected automatically:</p>

          <ul>
            <li>Browser type</li>
            <li>Device type</li>
            <li>Pages visited</li>
            <li>Time spent on pages</li>
            <li>Referring websites</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>Cookies</h2>

          <p>
            OnlyPresents uses cookies and similar technologies to improve user
            experience and analyze website traffic.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Advertising</h2>

          <p>
            We use third-party advertising services such as Google AdSense.
            These services may use cookies to display relevant ads based on user
            interactions.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Third-Party Links</h2>

          <p>
            Our website contains links to external websites. We are not
            responsible for the privacy practices of those websites.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
