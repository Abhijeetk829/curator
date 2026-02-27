import { ForwardedRef, forwardRef, useEffect, useState } from "react";
import { tabs } from "../../data";
import { BrandLogo } from "../BrandLogo";
import { SearchBar } from "../finder";
import styles from "./NavbarDesktop.module.scss";

interface NavbarDesktopProps {
  activeTab: string;
  setActiveTab: (v: string) => void;
  onSearch: (s: string) => void;
}

export const NavbarDesktop = forwardRef<HTMLDivElement, NavbarDesktopProps>(
  (
    { activeTab, setActiveTab, onSearch }: NavbarDesktopProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const [compact, setCompact] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        setCompact(scrollY > 300);
      };

      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
      <div
        className={`${styles.navbar} ${compact ? styles.compact : ""}`}
        ref={ref}
      >
        <div className={styles.topbar}>
          <div className={styles.logo}>
            <BrandLogo />
          </div>
          <div className={styles.search}>
            <SearchBar onSearch={onSearch} />
          </div>
          <div /> {/* empty right side */}
        </div>

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
    );
  },
);

NavbarDesktop.displayName = "NavbarDesktop";

export default NavbarDesktop;
