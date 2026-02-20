import { RefObject, useEffect, useState } from "react";
import { tabs } from "../../data";
import { BrandLogo } from "../BrandLogo";
import { SearchBar } from "../SearchBar";
import styles from "./NavbarDesktop.module.scss";

interface NavbarDesktopProps {
  scrollContainerRef: RefObject<HTMLDivElement>;
  activeTab: string;
  setActiveTab: (v: string) => void;
  onSearch: (s: string) => void;
}

export const NavbarDesktop = ({
  scrollContainerRef,
  activeTab,
  setActiveTab,
  onSearch,
}: NavbarDesktopProps) => {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const el = scrollContainerRef?.current;
    if (!el) return;

    const handleScroll = () => {
      setCompact(el.scrollTop > 60);
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, [scrollContainerRef]);

  return (
    <div className={`${styles.navbar} ${compact ? styles.compact : ""}`}>
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
};

NavbarDesktop.displayName = "NavbarDesktop";

export default NavbarDesktop;
