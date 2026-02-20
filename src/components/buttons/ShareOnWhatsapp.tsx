import WhatsApp from "@mui/icons-material/WhatsApp";

import styles from "./ShareOnWhatsapp.module.scss";

interface ShareOnWhatsappProps {
  productId: string;
  productName: string;
  className?: string;
}

export const ShareOnWhatsapp = ({
  productId,
  productName,
  className,
}: ShareOnWhatsappProps) => {
  const productUrl = `${location.href}product/${productId}`;
  const handleShare = () => {
    const url = `https://api.whatsapp.com/send?text=Check out this product I found on OnlyPresents: \n\n ${productName}\n\n ${productUrl}`;
    window.open(url, "_blank");
  };

  return (
    <button
      className={`${styles.button} ${className || ""}`}
      onClick={handleShare}
    >
      <WhatsApp />
      Share on WhatsApp
    </button>
  );
};

ShareOnWhatsapp.displayName = "ShareOnWhatsapp";

export default ShareOnWhatsapp;
