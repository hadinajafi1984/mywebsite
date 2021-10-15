import { data } from "jquery";
import { useState } from "react";
import { menuData, MenuData } from "../menu-data/menu";
interface Mdata extends MenuData {
  setStyle: any;
  setPage: any;
}

export const MenuLi = ({
  id,
  text,
  css,
  aClass,
  url,
  setStyle,
  setPage,
}: Mdata) => {
  return (
    <li
      key={id}
      onClick={() => {
        setStyle(text);
        setPage(text);
      }}
    >
      <a href={url} className={aClass} data-id={id}>
        <span className="nav-menu-icon">
          <i className={css}></i>
        </span>
        {text}
      </a>
    </li>
  );
};
