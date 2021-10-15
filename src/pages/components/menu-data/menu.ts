export interface MenuData {
  id: number;
  text: string;
  url: string;
  css: string;
  aClass: string;
}

export const menuData: MenuData[] = [
  {
    id: 1,
    text: "Home",
    css: "lnr lnr-home",
    aClass: "pt-link",
    url: "#home",
  },
  {
    id: 2,
    text: "About Me",
    css: "lnr lnr-user",
    aClass: "pt-link",
    url: "#about",
  },
  {
    id: 3,
    text: "Resume",
    css: "lnr lnr-license",
    aClass: "pt-link",
    url: "#resume",
  },
  {
    id: 4,
    text: "Portfolio",
    css: "lnr lnr-briefcase",
    aClass: "pt-link",
    url: "#portfolio",
  },
  {
    id: 5,
    text: "Blog",
    css: "lnr lnr-book",
    aClass: "pt-link",
    url: "#blog",
  },
  {
    id: 6,
    text: "Contact",
    css: "lnr lnr-envelope",
    aClass: "pt-link",
    url: "#contact",
  },
];
