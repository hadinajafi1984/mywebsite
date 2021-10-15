/* eslint-disable react/style-prop-object */

import { useState } from "react";
import { MenuData } from "./menu-data/menu";
import { MenuLi } from "./menu/menuLi";
interface Probs {
  data: MenuData[];
  setPage: any;
}
export const Menu = ({ data, setPage }: Probs) => {
  const [style, setStyle] = useState("");
  return (
    <nav className="nav-menu">
      <ul>
        {data.map((menu) => (
          <MenuLi
            id={menu.id}
            text={menu.text}
            url={menu.url}
            css={menu.css}
            aClass={style == menu.text ? menu.aClass + " active" : menu.aClass}
            setStyle={setStyle}
            setPage={setPage}
          />
        ))}
      </ul>
    </nav>
  );
};
