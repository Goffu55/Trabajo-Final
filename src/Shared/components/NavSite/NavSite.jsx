import React from "react";
import './NavSite.css'

import Logo from "../../../resource/image/Logo.webp"
import Home from "../../../resource/icon/icon _home_.png"
import File from "../../../resource/icon/icon _Folder Open_.png"
import Ball from "../../../resource/icon/icon _Baseball Ball_.png"
import shop from "../../../resource/icon/icon _Shopping Basket_.png"
import Dollar from "../../../resource/icon/icon _Dollar Sign_.png"



export const NavSite = () => {
  return (
    <div className="nav__section">
      <div className="nav__container">
      </div>
      <img src={Logo} alt="logo-topClub" className="nav__logo"/>
      <div className="nav__container">
        <ul className="nav__list">
          <li className="nav__page">
            <a href="#">
              <img src={Home} alt="Home" />
              Home
            </a>
          </li>
          <li className="nav__page">
            <a href="#">
              <img src={File} alt="Pages" />
              Pages
            </a>
          </li>
          <li className="nav__page">
            <a href="#">
              <img src={Ball} alt="Sport" />
              SportSpress
            </a>
          </li>
          <li className="nav__page">
            <a href="#">
              <img src={shop} alt="Shop" />
              Shop
            </a>
          </li>
          <li className="nav__page">
            <a href="#">
              
              $
              Purchase
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
