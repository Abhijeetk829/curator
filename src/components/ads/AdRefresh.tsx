import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export default function AdRefresh() {
  const location = useLocation();

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.log("Ad refresh skipped");
    }
  }, [location]);

  return null;
}
