import React from "react";
import css from "./header.module.scss";
import logo from "../../../assets/logo.png";
import { FaIcons, FaSearch } from "react-icons/fa";

export default function Header({ busqueda }) {
  return (
    <nav className={css.header}>
      <div className={css.div_header}>
        <div className={css.div_logo}>
          <img src={logo} alt="" />
        </div>
        <div className={css.div_search}>
          <div>
            <FaSearch/>
          </div>
          <input type="search" onChange={(e) => busqueda(e.target.value)} />
        </div>
      </div>
    </nav>
  );
}

