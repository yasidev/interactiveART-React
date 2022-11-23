import React from "react";
const menuItem = [
  {
    text: "Home",
    url: "#header-bottom",
  },
  {
    text: "About",
    url: "#header-bottom",
  },
  {
    text: "How it works",
    url: "#works",
  },
  {
    text: "Clients",
    url: "#comments",
  },
  {
    text: "Portfolio",
    url: "#portfolio",
  },
];

export default function Menu() {
  return (
    <ul className="menu">
      {menuItem.map(({text,url}) => {
        return (
          <li className="menu-item" key={text}>
            <a href={url} className="menu-link">
              {text}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
