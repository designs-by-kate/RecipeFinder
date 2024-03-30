import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import "./style.css";
import logo from '../../assets/menuLogo.png'
import menuIcon from '../../assets/menuIconGold.png'
import closeIcon from '../../assets/closeIcon.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="customNavbar">
      <div>
        <img className="logo"
          src={logo}
          alt="Logo"
        />
        <a className="title" href="/RecipeFinder/">
          <span>Recipe</span>
          <span>Finder</span>
        </a>
      </div>
      <div className="menu">
        <img
          className="menuBtn"
          src={menuOpen ? closeIcon : menuIcon}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${"menuItems"} ${menuOpen && "menuOpen"}`}
          onClick={() => setMenuOpen(false)}
        >
          <li className="nav-item">
            <NavLink
              to="/home"
              end
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              <span className="nav-text">Home</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/favourite"
              end
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              <span className="nav-text">Favourite</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              end
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              <span className="nav-text">Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;