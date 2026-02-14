import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { useParams } from "react-router-dom";
import { Navbar, ProductCard, ProductModal } from "../components";
import {
  boyfriend,
  couple,
  girlfriend,
  tabs,
  under499,
  valentine,
} from "../data";
import { Product } from "../types";
import { shuffleArray } from "../utils";
import styles from "./Home.module.scss";

export function Home() {
  // Shuffled data to ensure different order on each load
  const globalData: Record<string, Product[]> = {
    under499: shuffleArray(under499 as Product[]),
    valentine: shuffleArray(valentine as Product[]),
    girlfriend: shuffleArray(girlfriend as Product[]),
    boyfriend: shuffleArray(boyfriend as Product[]),
    couple: shuffleArray(couple as Product[]),
  };

  // Extracting both category and id from URL parameters
  const { category: productCategory, id: productId } = useParams();

  // State to manage active tab, product data, and selected product for modal
  const [activeTab, setActiveTab] = useState(tabs.defaultTab);
  const [data, setData] = useState<Product[]>(valentine as Product[]);
  const [selected, setSelected] = useState<any>(null);

  // Effect to handle URL parameters and set the active tab and selected product accordingly
  useEffect(() => {
    if (productId && productCategory) {
      setData(globalData[productCategory] || []);
      const product = globalData[productCategory]?.find(
        (p: any) => p.id === productId,
      );
      if (product) {
        setActiveTab(product.tab);
        setSelected(product);
      }
    }
  }, [productId]);

  // Effect to update product data when active tab changes
  useEffect(() => {
    if (activeTab) {
      setData(globalData[activeTab] || []);
    }
  }, [activeTab]);

  return (
    <div className={styles.home}>
      <Navbar active={activeTab} setActive={setActiveTab} />
      <Masonry
        breakpointCols={{ default: 5, 1100: 3, 700: 2 }}
        className="masonry-grid"
        columnClassName="masonry-column"
      >
        {data.map(
          (p: Product) =>
            p.id && (
              <ProductCard
                key={p.id}
                product={p}
                onClick={() => setSelected(p)}
              />
            ),
        )}
      </Masonry>
      <ProductModal product={selected} close={() => setSelected(null)} />
    </div>
  );
}

Home.displayName = "Home";

export default Home;
