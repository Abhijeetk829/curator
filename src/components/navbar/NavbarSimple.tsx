import { isMobile } from "react-device-detect";
import { BrandLogo } from "../BrandLogo";
import stylesDesktop from "./NavbarDesktop.module.scss";
import stylesMobile from "./NavbarMobile.module.scss";

export const NavbarSimple = () => {
  return (
    <nav className={`${stylesDesktop.navbar} ${stylesMobile.navbar}`}>
      {isMobile ? (
        <div className={`${stylesDesktop.logo} ${stylesMobile.logo}`}>
          <a href="/">
            <BrandLogo />
          </a>
        </div>
      ) : (
        <div className={stylesDesktop.topbar}>
          <div className={stylesDesktop.logo}>
            <a href="/">
              <BrandLogo />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

NavbarSimple.displayName = "NavbarSimple";

export default NavbarSimple;
