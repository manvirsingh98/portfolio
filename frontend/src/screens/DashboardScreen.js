import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Route } from "react-router-dom";

import { useSelector } from "react-redux";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import Form from "../components/forms/Form";

const DashboardScreen = () => {
  return (
    <>
      <div className="container py-4">DASHBOARD</div>
    </>
  );
};

export default DashboardScreen;
