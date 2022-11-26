import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      <section className="navbar">
        <NavLink to="/">
          <FontAwesomeIcon icon={faHouse} />
        </NavLink>
      </section>
      <Outlet />
    </>
  );
};

export default Navbar;
