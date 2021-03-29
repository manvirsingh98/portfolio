import React, { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch } from "react-redux";
import * as Scroll from "react-scroll";
import { Link } from "react-scroll";
import { useSelector } from "react-redux";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { logout } from "../actions/userActions";

const Header = () => {
  const [headerColor, setHeaderColor] = useState("");
  const dispatch = useDispatch();

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setHeaderColor("#303740") : setHeaderColor("");
  };
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    // <header>
    <Navbar
      sticky="top"
      className=" py-3"
      expand="lg"
      collapseOnSelect
      style={{ background: headerColor, transition: "200ms ease-in-out" }}
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Link
              className="nav-link"
              to="hero"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
            >
              Home
            </Link>
            <Link
              className="nav-link"
              // activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
            >
              About
            </Link>
            <Link
              className="nav-link"
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
            >
              Skills
            </Link>
            <LinkContainer className="mx-5" to="/">
              <Navbar.Brand>Portfolio</Navbar.Brand>
            </LinkContainer>
            <Link
              className="nav-link"
              to="experience"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
            >
              Experience
            </Link>
            <Link
              className="nav-link"
              to="qualification"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
            >
              Qualifcation
            </Link>
            <Link
              className="nav-link"
              to="work"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
            >
              Work
            </Link>

            {/* {userInfo && (
              <NavDropdown
                className="ml-auto"
                title={userInfo.name}
                id="username"
              >
                <LinkContainer to="/dashboard/heroForm">
                  <NavDropdown.Item>Dashboard</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            )} */}

            {/* {userInfo && userInfo.isAdmin && (
              <NavDropdown title="Admin" id="adminmenu">
                <LinkContainer to="/admin/userlist">
                  <NavDropdown.Item>Users</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            )} */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // </header>
  );
};

export default Header;
