import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { useParams } from "react-router-dom";
import { Navbar, ProductCard, ProductModal } from "../components";
import data from "../data/products.json";
import styles from "./Home.module.scss";

export default function Home() {
  const { id: productId } = useParams();
  const [activeTab, setActiveTab] = useState(data.defaultTab);
  const [selected, setSelected] = useState<any>(null);

  useEffect(() => {
    if (productId) {
      const product = data.products.find((p: any) => p.id === productId);
      if (product) {
        setActiveTab(product.tab);
        setSelected(product);
      }
    }
  }, [productId]);

  const filtered = data.products.filter((p: any) => p.tab === activeTab);

  return (
    <div className={styles.home}>
      <Navbar active={activeTab} setActive={setActiveTab} />
      <Masonry
        breakpointCols={{ default: 5, 1100: 3, 700: 2 }}
        className="masonry-grid"
        columnClassName="masonry-column"
      >
        {filtered.map((p: any) => (
          <ProductCard key={p.id} product={p} onClick={() => setSelected(p)} />
        ))}
      </Masonry>
      <ProductModal product={selected} close={() => setSelected(null)} />
    </div>
  );
}
