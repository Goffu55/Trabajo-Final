import React from "react";

import './Social.css'

import Twitter from "../../../resource/icon/icon _Twitter_.png";
import Pinterest from "../../../resource/icon/icon _Pinterest P_.png";
import Reddit from "../../../resource/icon/icon _reddit Alien_.png";
import Linkedin from "../../../resource/icon/icon _LinkedIn In_.png";
import Email from "../../../resource/icon/icon _Envelope_.png";

export const Social = () => {
  return (
    <div className="Footer">
      <ul className="Footer__list">
        <li className="Footer__icon twitter">
					<img src={Twitter} alt="Twitter" />
				</li>
				<li  className="Footer__icon pinterest">
					<img src={Pinterest} alt="Pinterest" />
				</li>
				<li  className="Footer__icon reddit">
					<img src={Reddit} alt="Reddit" />
				</li>
				<li  className="Footer__icon linkedin">
					<img src={Linkedin} alt="Linkedin" />
				</li>
				<li  className="Footer__icon email">
					<img src={Email} alt="Email" />
				</li>
      </ul>
    </div>
  );
};
