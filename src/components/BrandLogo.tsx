import Logo from "../img/logo.svg";
import styles from "./BrandLogo.module.scss";

export function BrandLogo() {
  return (
    <div className={styles.logoContainer}>
      <img src={Logo} className={styles.logo} alt="logo"></img>
    </div>
  );
}
