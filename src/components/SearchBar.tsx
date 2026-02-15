import Search from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import styles from "./SearchBar.module.scss";

interface SearchBarProps {
  onSearch: (s: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    onSearch(search);
  }, [search]);

  return (
    <>
      <div className={styles.searchWrap}>
        <span className={styles.searchIcon}>
          <Search className={styles.searchIconSvg} />
        </span>

        <input
          className={styles.searchInput}
          placeholder="Search gifts, mugs, perfume..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {search && (
          <button className={styles.clearBtn} onClick={() => setSearch("")}>
            Clear
          </button>
        )}
      </div>
    </>
  );
}
