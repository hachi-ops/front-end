// Navbar.js
import { useState } from "react";
import { NavLink } from 'react-router-dom'
import "../styles/navbar.css";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

const navLinkStyles = ({isActive}) => {
  return {
    fontWeight: isActive ? 'bold' : 'normal'
}
}
  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        (brand name)
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* hamburger svg code... */}
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
       

<nav>
        <ul>
          <li><NavLink style={navLinkStyles} to="/">Home</NavLink></li>
          <li><NavLink style={navLinkStyles} to="/user-login">UserLogin</NavLink></li>
          <li><NavLink style={navLinkStyles} to="/user-sign-up">UserSignUp</NavLink></li>
          {/* <li><NavLink style={navLinkStyles} to="/admin-login">AdminLogin</NavLink></li> */}
        </ul>
      </nav>
      </div>
    </nav>
  );
}