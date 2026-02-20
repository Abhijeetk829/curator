import { useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import Masonry from "react-masonry-css";
import { useParams } from "react-router-dom";
import {
  FilterTags,
  NavbarDesktop,
  NavbarMobile,
  ProductCard,
  ProductModal,
} from "../components";
import { data } from "../data";
import { FilterType, Product } from "../types";
import { containsTag, shuffleArray } from "../utils";
import styles from "./Home.module.scss";

const globalData = shuffleArray(data as Product[]);

export function Home() {
  const homeRef = useRef<HTMLDivElement>(null);
  // Extracting id from URL parameters
  const { value: filterValue, type: filterType } = useParams();

  // State to manage active tab, product data, and selected product for modal
  const [activeTab, setActiveTab] = useState("");
  const [activeTags, setActiveTags] = useState([] as string[]);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [filteredProducts, setFilteredProducts] =
    useState<Product[]>(globalData);
  const [searchText, setSearchText] = useState("");

  // Effect to handle URL parameters and set the active tab and selected product accordingly
  useEffect(() => {
    if (filterType === FilterType.Product && filterValue) {
      const product = globalData.find((p: any) => p.id === filterValue);
      if (product) {
        setActiveTab(product.tab);
        setActiveTags([]);
        setSelectedProduct(product);
      }
    }
  }, [filterValue]);

  useEffect(() => {
    let list = [...globalData];

    // TAB filter
    if (activeTab) {
      list = list.filter((p) => p.tab === activeTab);
    }

    // SEARCH filter
    if (searchText.trim()) {
      const s = searchText.toLowerCase();
      list = list.filter((p) =>
        `${p.name} ${p.description} ${p.tags?.join(" ")}`
          .toLowerCase()
          .includes(s),
      );
    }

    // TAG filter
    if (activeTags.length > 0) {
      list = list.filter((p) => containsTag(activeTags, p));
    }

    setFilteredProducts(list);
  }, [activeTab, activeTags, searchText]);

  const tabHandler = (tab: string) => {
    if (activeTab === tab) {
      setActiveTab("");
    } else {
      setActiveTab(tab);
      setActiveTags([]);
    }
  };

  return (
    <div ref={homeRef} className={styles.home}>
      {isMobile ? (
        <NavbarMobile activeTab={activeTab} setActiveTab={tabHandler} />
      ) : (
        <NavbarDesktop
          scrollContainerRef={homeRef}
          activeTab={activeTab}
          setActiveTab={tabHandler}
          onSearch={setSearchText}
        />
      )}

      <Masonry
        breakpointCols={{ default: 5, 1100: 3, 700: 2 }}
        className={`masonry-grid ${isMobile ? styles.gridMobile : ""}`}
        columnClassName="masonry-column"
      >
        {filteredProducts.map(
          (p: Product) =>
            p.id && (
              <ProductCard
                key={p.id}
                product={p}
                onClick={() => setSelectedProduct(p)}
              />
            ),
        )}
      </Masonry>
      <ProductModal
        product={selectedProduct}
        close={() => setSelectedProduct(null)}
      />
      <FilterTags
        filteredData={
          activeTab ? globalData.filter((p) => p.tab === activeTab) : globalData
        }
        activeTags={activeTags}
        setActiveTags={(tag: string) =>
          setActiveTags((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
          )
        }
        clearAllTags={() => setActiveTags([])}
        scrollContainerRef={homeRef}
      />
    </div>
  );
}

Home.displayName = "Home";

export default Home;
