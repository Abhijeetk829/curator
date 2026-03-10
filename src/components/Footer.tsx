import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLinks}>
        <a href="/about">About</a>
        <a href="/privacy">Privacy</a>
        <a href="/terms">Terms</a>
        <a href="/contact">Contact</a>
      </div>

      <p>
        Some links on this site may be affiliate links. We may earn a commission
        at no extra cost to you.
      </p>

      <div className={styles.copyright}>
        © {new Date().getFullYear()} OnlyPresents
      </div>
    </footer>
  );
}

Footer.displayName = "Footer";

export default Footer;
