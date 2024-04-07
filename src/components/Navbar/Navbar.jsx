import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { FaBars } from "react-icons/fa";
import Sidenav from "../SideNav/Sidenav";

function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState("home");

  const { getTotalCartAmount, open, setOpen } = useContext(StoreContext);

  const handleToggle = (e) => {
    e.stopPropagation();
    setOpen((prev) => !prev);
  }

  return (
    <div className="navbar">
      <Sidenav setShowLogin={setShowLogin} menu={menu} setMenu={setMenu} />

      <Link to="/">
        <img src={assets.mainLogo} alt="" className="logo" />
      </Link>

      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact us
        </a>
      </ul>

      <div className="navbar-right">
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <FaBars
          className="bars-icon"
          onClick={handleToggle}
        />
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
}

export default Navbar;
