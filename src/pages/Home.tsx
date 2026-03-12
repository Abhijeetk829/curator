import { useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import Masonry from "react-masonry-css";
import { useParams } from "react-router-dom";
import {
  BannerAd,
  FilterTags,
  Footer,
  GridAd,
  NavbarDesktop,
  NavbarMobile,
  ProductCard,
  ProductModal,
} from "../components";
import { data, tabs } from "../data";
import { FilterType, Product } from "../types";
import {
  containsTag,
  DESKTOP_AD_FREQUENCY,
  injectAds,
  IS_DEV,
  MOBILE_AD_FREQUENCY,
  shuffleArray,
} from "../utils";
import { AD_NAME } from "../utils/env";
import styles from "./Home.module.scss";

const shuffledData = IS_DEV
  ? (data as Product[])
  : shuffleArray(data as Product[]);

const adFrequency: number = isMobile
  ? MOBILE_AD_FREQUENCY
  : DESKTOP_AD_FREQUENCY;

const globalData = injectAds(shuffledData, adFrequency);

export function Home() {
  const homeRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);
  const { value: filterValue, type: filterType } = useParams();

  console.log(globalData);

  const [activeTab, setActiveTab] = useState(tabs.selectedTab || "");
  const [activeTags, setActiveTags] = useState([] as string[]);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [filteredProducts, setFilteredProducts] =
    useState<Product[]>(globalData);
  const [searchText, setSearchText] = useState("");

  /* -------------------------
     Deep linking for product
  --------------------------*/
  useEffect(() => {
    if (filterType === FilterType.Product && filterValue) {
      const product = globalData.find((p: any) => p.id === filterValue);
      if (product) {
        // Use first tab as default for deep link
        setActiveTab(product.tabs?.[0] || "");
        setActiveTags([]);
        setSelectedProduct(product);
      }
    }
  }, [filterValue]);

  /* -------------------------
     Filtering Logic
  --------------------------*/
  useEffect(() => {
    let list = [...globalData];

    // TAB filter
    if (activeTab) {
      list = list.filter((p) => p.tabs?.includes(activeTab));
    }

    // SEARCH filter
    if (searchText.trim()) {
      const s = searchText.toLowerCase();
      list = list.filter((p) =>
        `${p.name} ${p.description} ${p.tags?.join(" ")} ${p.tabs?.join(" ")}`
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
    <div className={styles.home} ref={homeRef}>
      {isMobile ? (
        <NavbarMobile
          ref={navbarRef}
          activeTab={activeTab}
          setActiveTab={tabHandler}
        />
      ) : (
        <NavbarDesktop
          ref={navbarRef}
          activeTab={activeTab}
          setActiveTab={tabHandler}
          onSearch={setSearchText}
        />
      )}
      <BannerAd />

      <Masonry
        breakpointCols={{ default: 5, 1100: 3, 700: 2 }}
        className={`masonry-grid ${
          isMobile ? styles.gridMobile : ""
        } ${filteredProducts.length === 0 ? styles.gridNoData : ""}`}
        columnClassName="masonry-column"
        style={{
          minHeight: `${
            window.innerHeight - (navbarRef.current?.clientHeight || 0)
          }px`,
        }}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p: Product) =>
            p.name === AD_NAME ? (
              <GridAd key={p.id} product={p} />
            ) : (
              <ProductCard
                key={p.id}
                product={p}
                onClick={() => setSelectedProduct(p)}
              />
            ),
          )
        ) : (
          <div className={styles.noData}>
            No products found for your search
            <div className={styles.searchText}>"{searchText}"</div>
            <br />
            <br />
            Try adjusting your search or filter to find what you're looking for!
          </div>
        )}
      </Masonry>

      <ProductModal
        product={selectedProduct}
        close={() => setSelectedProduct(null)}
      />

      {!isMobile && (
        <FilterTags
          filteredData={
            activeTab
              ? globalData.filter((p) => p.tabs?.includes(activeTab))
              : globalData
          }
          activeTags={activeTags}
          setActiveTags={(tag: string) =>
            setActiveTags((prev) =>
              prev.includes(tag)
                ? prev.filter((t) => t !== tag)
                : [...prev, tag],
            )
          }
          clearAllTags={() => setActiveTags([])}
          scrollContainerRef={homeRef}
        />
      )}

      <BannerAd />
      <Footer />
    </div>
  );
}

Home.displayName = "Home";
export default Home;
