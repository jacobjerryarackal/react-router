import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="primary-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/ContactPage">Contact</NavLink>
        <NavLink to="/Products">Products</NavLink>
      </nav>
    </>
  );
}
