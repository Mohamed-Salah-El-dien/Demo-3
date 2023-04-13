import { Link } from "react-router-dom";
import Logo from "../../images/logo/logo.png";
import { useState } from "react";

import "./Navbar.css";

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav>
        {/* mobile */}
        <div className={`mobileNavbar ${nav ? "openNav" : ""}`}>
          <div onClick={openNav} className="navbarClose">
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul className="mobileLinks">
            <li>
              <Link onClick={openNav} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/models">
                Models
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/testimonials">
                Testimonials
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/team">
                Our Team
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* desktop */}

        <div className="navbar">
          <div className="navbarImg">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo} alt="logo-img" />
            </Link>
          </div>
          <ul className="navbarLinks">
            <li>
              <Link className="homeLink" to="/">
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link className="aboutLink" to="/about">
                About
              </Link>
            </li>
            <li>
              {" "}
              <Link className="modelsLink" to="/models">
                Vehicle Models
              </Link>
            </li>
            <li>
              {" "}
              <Link className="testiLink" to="/testimonials">
                Testimonials
              </Link>
            </li>
            <li>
              {" "}
              <Link className="teamLink" to="/team">
                Our Team
              </Link>
            </li>
            <li>
              {" "}
              <Link className="contactLink" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="navbarButtons">
            <Link className="navbarSignin" to="/">
              Sign In
            </Link>
            <Link className="navbarRegister" to="/">
              Register
            </Link>
          </div>

          {/* mobile */}
          <div className="mobileHamb" onClick={openNav}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
