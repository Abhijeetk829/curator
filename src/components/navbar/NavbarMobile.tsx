import { ForwardedRef, forwardRef } from "react";
import { tabs } from "../../data";
import { BrandLogo } from "../BrandLogo";
import { PWAInstallButton } from "../buttons";
import styles from "./NavbarMobile.module.scss";

interface NavbarMobileProps {
  activeTab: string;
  setActiveTab: (v: string) => void;
}

export const NavbarMobile = forwardRef<HTMLDivElement, NavbarMobileProps>(
  (
    { activeTab, setActiveTab }: NavbarMobileProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <>
        <div className={`${styles.navbar}`} ref={ref}>
          <BrandLogo className={styles.logo} />

          <div className={styles.tabs}>
            {tabs.tabs.map((t: any) => (
              <span
                key={t.id}
                className={`${styles.tab} ${activeTab === t.id ? styles.activeTab : ""}`}
                onClick={() => setActiveTab(t.id)}
              >
                {t.title}
              </span>
            ))}
          </div>
        </div>
        <PWAInstallButton />
      </>
    );
  },
);

NavbarMobile.displayName = "NavbarMobile";

export default NavbarMobile;
