import React from "react";
import './HeaderSite.css'

import Sign from "../../resource/icon/icon _Alternate Sign Out_.png"
import Search from "../../resource/icon/icon _Search_.png"
import Cart from "../../resource/icon/icon _shopping-cart_.png"

import { NavSite } from "../components/NavSite/NavSite";

export const HeaderSite = () => {
  return (
    <div className="headerSection">
      <section className="headerSection__section">
        <div className="headerSection__contentList">
          <ul className="headerSection__icons">
            <li className="headerSection__icon">
              <img src={Sign} alt="Sigin"/>
            </li>
            <li className="headerSection__icon">
              <img src={Search} alt="Search" />
            </li>
            <li className="headerSection__icon">
              <img src={Cart} alt="Cart" />
              <span>0</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="headerSection__section">
        <nav className="headerSection__nav nav">
          <NavSite></NavSite>
        </nav>
      </section>
    </div>
  );
};
