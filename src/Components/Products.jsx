import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Products() {
  const navigate = useNavigate();
  return (
    <>
      <br />
      <div>
        <input type="search" placeholder="Search for new products" />
      </div>
      <br />
      <br />
      <br />
      <br />
      <nav>
        <Link to="Featured">Featured</Link>
        <Link to="New">New</Link>
      </nav>
      <Outlet />
      <br />
      <br />
      <button onClick={() => navigate("/")}>Home</button>
      <br />
      <br />
      <button onClick={() => navigate("/ContactPage")}>Back Page</button>
    </>
  );
}
