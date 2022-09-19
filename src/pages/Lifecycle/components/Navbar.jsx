import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark py-3" id="home">
        <div className="container">
          <a
            className="navbar-brand ms-auto"
            href="#home"
            style={{ fontFamily: "Poppins" }}
          >
            News Portal - Lifecycle
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
