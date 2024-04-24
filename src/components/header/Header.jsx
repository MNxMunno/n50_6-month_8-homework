// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";
// import NavLinks from "../../static/navLink/NavLinks";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome, FaReact } from "react-icons/fa";
import { BsFillPostageFill } from "react-icons/bs";
import {
  MdMiscellaneousServices,
  MdOutlineProductionQuantityLimits,
} from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { SiBloglovin } from "react-icons/si";
const Header = () => {
  let navigation = useNavigate();

  const [toggel, setToggel] = useState(false);

  return (
    <header>
      <div className="container">
        <nav>
          <a className="logo" onClick={() => navigation("/")}>
            <img src={Logo} alt="log" />
          </a>
          <div className="nav__items">
            <NavLink className="nav__link" to={"/"}>
              <button className="nav__icons">
                <FaHome />
              </button>
              <div className="nav_link">Home</div>
            </NavLink>
            <NavLink className="nav__link" to={"/about"}>
              <button className="nav__icons">
                <FcAbout />
              </button>
              <div className="nav_link">About</div>
            </NavLink>
            <NavLink className="nav__link" to={"/services"}>
              <button className="nav__icons">
                <MdMiscellaneousServices />
              </button>
              <div className="nav_link">Services</div>
            </NavLink>
            <NavLink className="nav__link" to={"/careers"}>
              <button className="nav__icons">
                <BsFillPostageFill />
              </button>
              <div className="nav_link">Careers</div>
            </NavLink>
            <NavLink className="nav__link" to={"/blog"}>
              <button className="nav__icons">
                <SiBloglovin />
              </button>
              <div className="nav_link">Blog</div>
            </NavLink>
            <button className="nav__btn">
              <NavLink className="nav__link nav__link__btn" to={"/product"}>
                <a className="nav__icons">
                  <MdOutlineProductionQuantityLimits />
                </a>
                <a className="nav_link">Products</a>
              </NavLink>
            </button>
          </div>
          <button>
            <FaReact className="menu" />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
