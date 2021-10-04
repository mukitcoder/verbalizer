import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid className="header-container">
          <img className="img-fluid" src={logo} alt="" />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link className="header-menu" to="/home">
                Home
              </Link>
              <Link className="header-menu" to="/services">
                Services
              </Link>
              <Link className="header-menu" to="/about">
                About Us
              </Link>
              <Link className="header-menu" to="/contact">
                Contact
              </Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button
                className="btn btn-outline button-style"
                variant="outline-success"
              >
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
