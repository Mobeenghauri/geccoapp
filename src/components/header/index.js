import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "./header.css";

function Header() {
  return (
    <header className="head">
      <>
        <Navbar>
          <Container>
            <Navbar.Brand>
              <img src="assests/images/logo.png"></img>
            </Navbar.Brand>
          </Container>
        </Navbar>
      </>
    </header>
  );
}

export default Header;
