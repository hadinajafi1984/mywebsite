/* eslint-disable react/style-prop-object */
import { MenuData } from "./menu-data/menu";
interface Probs {
  data: MenuData[];
}
export const Menu = ({ data }: Probs) => {
  return (
    <nav className="nav-menu">
      <ul>
        {data.map((menu) => (
          <li key={menu.id}>
            <a href={menu.url} className="pt-link">
              <span className="nav-menu-icon">
                <i className={menu.css}></i>
              </span>
              {menu.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
