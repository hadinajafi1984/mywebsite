export interface MenuData {
  id: number;
  text: string;
  url: string;
  css: string;
}

export const menuData: MenuData[] = [
  {
    id: 1,
    text: "Home",
    css: "lnr lnr-home",
    url: "#home",
  },
  {
    id: 2,
    text: "About Me",
    css: "lnr lnr-user",
    url: "#about",
  },
  {
    id: 3,
    text: "Resume",
    css: "lnr lnr-license",
    url: "#resume",
  },
  {
    id: 4,
    text: "Portfolio",
    css: "lnr lnr-briefcase",
    url: "#portfolio",
  },
  {
    id: 5,
    text: "Blog",
    css: "lnr lnr-book",
    url: "#blog",
  },
  {
    id: 6,
    text: "Contact",
    css: "lnr lnr-envelope",
    url: "#contact",
  },
];
