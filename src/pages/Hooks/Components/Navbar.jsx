import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark py-3" id="home">
      <div className="container">
        <a
          className="navbar-brand ms-auto"
          href="#home"
          style={{ fontFamily: "Poppins" }}
        >
          News Portal - Hooks
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
