import data from "../data/tabs.json";
import styles from "./Navbar.module.scss";

export default function Navbar({
  active,
  setActive,
}: {
  active: string;
  setActive: (v: string) => void;
}) {
  return (
    <div className={styles.navbar}>
      {data.tabs.map((t: any) => (
        <button
          key={t.id}
          className={`${styles.tab} ${active === t.id ? styles.active : ""}`}
          onClick={() => setActive(t.id)}
        >
          {t.title}
        </button>
      ))}
    </div>
  );
}
