import React, { useContext, useEffect, useRef } from "react";
import { StoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import './Sidenav.css'

function Sidenav({setShowLogin, menu, setMenu }) {
  const { open, setOpen} = useContext(StoreContext);

  const sidebarRef = useRef(null);

  const handleOutsideClick = (e) => {
    if(sidebarRef.current && !sidebarRef.current.contains(e.target)){
        setOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
        document.removeEventListener('click', handleOutsideClick);
    }
  }, [])

  const handleToggleSidebar = () => {
    setOpen((prev) => !prev)
  }

  const handleSignIn = () => {
    setOpen(false);
    setShowLogin(true);
  }

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

  return (
    <div ref={sidebarRef} className={`sidebar-container ${open ? "open" : "closed"}`}>
      <div className="sidebar-nav">
        <div className="nav-signin">
          <button onClick={handleSignIn}>Sign in</button>
          <FaBars onClick={handleToggleSidebar} className="bars-icon-sidenav" />
        </div>
        <div className="sidenav-items">
          <ul className="sidenav-menu">
            <Link
              to="/"
              onClick={() => {setMenu("home"); setOpen(false); scrollToTop()}}
              className={`side-item ${menu === "home" ? "side-active" : ""}`}
            >
              Home
            </Link>
            <a
              href="#explore-menu"
              onClick={() => {setMenu("menu"); setOpen(false);}}
              className={`side-item ${menu === "menu" ? "side-active" : ""}`}
            >
              menu
            </a>
            <a
              href="#app-download"
              onClick={() => {setMenu("mobile-app"); setOpen(false);}}
              className={`side-item ${menu === "mobile-app" ? "side-active" : ""}`}
            >
              mobile app
            </a>
            <a
              href="#footer"
              onClick={() => {setMenu("contact-us"); setOpen(false);}}
              className={`side-item ${menu === "contact-us" ? "side-active" : ""}`}
            >
              contact us
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
