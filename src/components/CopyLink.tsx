import ContentCopy from "@mui/icons-material/ContentCopy";
import { useState } from "react";
import { CopyToClipboard } from "../utils";
import styles from "./CopyLink.module.scss";

interface CopyLinkProps {
  productId: string;
}

export function CopyLink({ productId }: CopyLinkProps) {
  const [copied, setCopied] = useState(false);
  const productUrl = `${location.href}product/${productId}`;

  const handleLinkCopy = () => {
    CopyToClipboard(productUrl, () => {
      setCopied(true);
    });
    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  return (
    <button
      className={
        copied ? `${styles.copyLink} ${styles.copiedLink}` : styles.copyLink
      }
      onClick={handleLinkCopy}
    >
      <ContentCopy />
      <span className={styles.copyText}>
        {copied ? "Link Copied" : "Copy Link"}
      </span>
    </button>
  );
}
