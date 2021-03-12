import React, { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch } from "react-redux";

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
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Skills</Nav.Link>
            <LinkContainer className="mx-5" to="/">
              <Navbar.Brand>Portfolio</Navbar.Brand>
            </LinkContainer>
            <Nav.Link href="#link">Experience</Nav.Link>
            <Nav.Link href="#link">Qualifcation</Nav.Link>
            <Nav.Link href="#link">Work</Nav.Link>

            {userInfo && (
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
            )}

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
