/* eslint-disable jsx-a11y/anchor-is-valid */

import profileImg from "../../assets/img/profile-img.jpg";
import { Menu } from "./Menu";
import { Footer } from "./Footer";
import { menuData } from "./menu-data/menu";
interface Probs {
  name: string;
  setPage: any;
}
export const Header = ({ name, setPage }: Probs) => {
  return (
    <header>
      <div className="header-content">
        <div className="header-mobile">
          <a className="header-toggle">
            <i className="fas fa-bars"></i>
          </a>
          <h2>{name}</h2>
        </div>
        <div className="header-main" data-simplebar>
          <div className="image-container">
            <h2 className="header-name">{name}</h2>
            <img src={profileImg} alt="profile-pic" />
          </div>
          <Menu data={menuData} setPage={setPage} />
          <Footer />
        </div>
      </div>
    </header>
  );
};
