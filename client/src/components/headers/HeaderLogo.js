import React from "react";
import { Link } from "react-router-dom";
import Logo from "./icon/logo.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram ,faTwitter } from "@fortawesome/free-brands-svg-icons"

function HeaderLogo() {

  return (
    <header className="headerLogo">

        <div className="header-social-icon">
            <ul>
                <li><a href="#"><FontAwesomeIcon icon={faFacebook}/></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faInstagram}/></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faTwitter}/></a></li>
            </ul>
        </div>

        <div className="header-logo">
            <h1>
                <Link to="/"><img src={Logo} alt="Logo"/></Link>
            </h1>
        </div>
    
        <div className="header-call-btn">
            <a href="#" className="call_btn">Call Us: +10 783 346 4378</a>
        </div>
    </header>
  );
}

export default HeaderLogo;
