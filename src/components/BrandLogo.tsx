import { isMobile } from "react-device-detect";
import CompactLogo from "../img/compact_logo.svg";
import Logo from "../img/logo.svg";
import styles from "./BrandLogo.module.scss";

interface BrandLogoProps {
  className?: string;
}

export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <img
      src={isMobile ? CompactLogo : Logo}
      className={`${styles.logo} ${isMobile ? styles.compact : ""} ${className || ""}`}
      alt="logo"
    ></img>
  );
}
