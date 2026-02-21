import CloseRounded from "@mui/icons-material/CloseRounded";
import GetAppRoundedIcon from "@mui/icons-material/GetAppRounded";
import { usePWAInstall } from "../../hooks";
import styles from "./PWAInstallButton.module.scss";

export const PWAInstallButton = () => {
  const { installable, installApp, isInstalled, dismissInstall } =
    usePWAInstall();

  return (
    <>
      {installable && !isInstalled && (
        <div className={styles.pwaWrapper}>
          <button onClick={installApp} className={styles.pwaButton}>
            <div className={styles.pwaContent}>
              <GetAppRoundedIcon className={styles.pwaIcon} />
              Install App
            </div>
          </button>

          <button className={styles.pwaClose} onClick={dismissInstall}>
            <CloseRounded />
          </button>
        </div>
      )}
    </>
  );
};

PWAInstallButton.displayName = "PWAInstallButton";

export default PWAInstallButton;
