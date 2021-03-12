import React from "react";
import { Nav } from "react-bootstrap";
import { useRouteMatch, Link } from "react-router-dom";
const AdminAsideNavLink = ({ path, linkName }) => {
  let match = useRouteMatch();

  return (
    <>
      <Nav.Item className="nav-item">
        <Link className="nav-link" to={`${match.url}/${path}`}>
          {linkName}
        </Link>
      </Nav.Item>
    </>
  );
};

export default AdminAsideNavLink;
