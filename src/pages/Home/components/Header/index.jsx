import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import styled from "styled-components";
import styles from "./index.module.css";

const StyledNavbarBrand = styled(Navbar.Brand)`
  color: #ffffff;
  font-family: "Amita", cursive;
`;

const StyledNavLink = styled(Nav.Link)`
  font-family: "Poppins", sans-serif;
  color: #ffffff;
`;

export class Header extends React.Component {
  render() {
    let { navActive } = this.props;

    return (
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        expand="lg"
        className="pb-3 mb-4"
      >
        <Container className="px-5 py-2">
          <StyledNavbarBrand href="#home" className="fs-5 pb-0">
            bramtriprastowo
          </StyledNavbarBrand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <StyledNavLink
                href="#profile"
                className={
                  navActive === "profile"
                    ? `fs-5 me-4 pb-0 ${styles.navItem} ${styles.navItemActive}`
                    : `fs-5 me-4 pb-0 ${styles.navItem}`
                }
              >
                Profile
              </StyledNavLink>
              <StyledNavLink
                href="#projects"
                className={
                  navActive === "projects"
                    ? `fs-5 me-4 pb-0 ${styles.navItem} ${styles.navItemActive}`
                    : `fs-5 me-4 pb-0 ${styles.navItem}`
                }
              >
                Projects
              </StyledNavLink>
              <StyledNavLink
                href="#contact"
                className={
                  navActive === "contact"
                    ? `fs-5 me-4 pb-0 ${styles.navItem} ${styles.navItemActive}`
                    : `fs-5 me-4 pb-0 ${styles.navItem}`
                }
              >
                Contact
              </StyledNavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
