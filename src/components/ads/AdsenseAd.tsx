import { useEffect, useRef } from "react";
import { CAPUB } from "../../utils";

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

interface Props {
  slot: string;
  format?: "rectangle" | "auto";
  style?: React.CSSProperties;
}

export default function AdsenseAd({ slot, format, style }: Props) {
  const adRef = useRef<HTMLModElement | null>(null);

  useEffect(() => {
    const ad = adRef.current;

    if (!ad) return;

    // Prevent double push
    if (ad.getAttribute("data-adsbygoogle-status") === "done") {
      return;
    }

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log("Adsense push skipped");
    }
  }, []);

  return (
    <ins
      ref={adRef}
      className="adsbygoogle"
      style={style ? style : { display: "block" }}
      data-ad-client={`ca-pub-${CAPUB}`}
      data-ad-slot={slot}
      data-ad-format={format ? format : "auto"}
      data-full-width-responsive="true"
    />
  );
}
