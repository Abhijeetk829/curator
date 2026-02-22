import Close from "@mui/icons-material/Close";
import FilterAlt from "@mui/icons-material/FilterAlt";
import { RefObject, useEffect, useMemo, useState } from "react";
import { Product } from "../../types";
import { getTags, groupTags } from "../../utils";
import styles from "./FilterTags.module.scss";

interface FilterTagProps {
  filteredData: Product[];
  activeTags: string[];
  setActiveTags: (tag: string) => void;
  clearAllTags: () => void;
  scrollContainerRef: RefObject<HTMLDivElement>;
}

export function FilterTags({
  filteredData,
  activeTags,
  setActiveTags,
  clearAllTags,
  scrollContainerRef,
}: FilterTagProps) {
  // generate tags + groups
  const allTags = useMemo(() => getTags(filteredData), [filteredData]);

  const grouped = useMemo(() => groupTags(allTags), [allTags]);

  const groupKeys = useMemo(
    () => Object.keys(grouped).filter((k) => grouped[k].length > 0),
    [grouped],
  );

  const [activeGroup, setActiveGroup] = useState(groupKeys[0] || "");
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const activeCount = activeTags.length;

  // reset active group if dataset changes
  useEffect(() => {
    if (groupKeys.length && !groupKeys.includes(activeGroup)) {
      setActiveGroup(groupKeys[0]);
    }
  }, [groupKeys]);

  // collapse when scrolling main container
  useEffect(() => {
    const el = scrollContainerRef?.current;
    if (!el) return;

    const handleScroll = () => {
      if (open) setCollapsed(true);
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, [open, scrollContainerRef]);

  const headerClass = collapsed
    ? `${styles.header} ${styles.headerCollapsed}`
    : styles.header;

  const handleMouseEnter = () => {
    if (collapsed) setCollapsed(false);
  };

  const groupSelectedCount = (groupName: string) => {
    const tags = grouped[groupName] || [];
    return tags.filter((tag: string) => activeTags.includes(tag)).length;
  };

  const renderTags = () => {
    if (!activeGroup) return null;

    return (grouped[activeGroup] || []).map((tag: string) => {
      const active = activeTags.includes(tag);

      return (
        <button
          key={tag}
          onClick={() => setActiveTags(tag)}
          className={`${styles.tag} ${active ? styles.activeTag : ""}`}
        >
          {tag}
        </button>
      );
    });
  };

  return (
    <>
      {/* Floating button */}
      <button
        disabled={allTags.length === 0}
        className={`${styles.floatingBtn}
        ${open ? styles.floatingBtnOpen : ""}
        ${activeCount > 0 && !open ? styles.hasFilters : ""}
        ${allTags.length === 0 ? styles.noTags : ""}`}
        onClick={() => {
          setOpen((prev) => !prev);
          setCollapsed(false);
        }}
      >
        <FilterAlt className={styles.icon} />
        Filters
        {activeCount > 0 && <span className={styles.badge}>{activeCount}</span>}
      </button>

      {/* Panel */}
      <div
        className={`${styles.wrapper} 
        ${open ? styles.show : ""} 
        ${collapsed ? styles.collapsed : ""}`}
        onMouseEnter={handleMouseEnter}
      >
        {/* Header */}
        <div className={headerClass}>
          <div className={headerClass}>
            {groupKeys.map((groupName) => {
              const count = groupSelectedCount(groupName);

              return (
                <button
                  key={groupName}
                  onClick={() => setActiveGroup(groupName)}
                  className={`${styles.groupBtn}
                  ${activeGroup === groupName ? styles.groupActive : ""}`}
                >
                  {groupName.toUpperCase()}

                  {count > 0 && (
                    <span className={styles.groupBadge}>{count}</span>
                  )}
                </button>
              );
            })}
          </div>

          {activeTags.length > 0 && (
            <button className={styles.clearBtn} onClick={clearAllTags}>
              <span>Clear</span>
              <Close className={styles.clearIcon} />
            </button>
          )}
        </div>

        {/* Tags */}
        <div className={styles.tags}>{renderTags()}</div>
      </div>
    </>
  );
}

FilterTags.displayName = "FilterTags";

export default FilterTags;
