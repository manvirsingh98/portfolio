import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import AdminAsideNavLink from "./AdminAsideNavLink";
import { logout } from "../actions/userActions";

const AdminAsideNav = () => {
  const dispatch = useDispatch();

  const [isShow, setIsShow] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <>
      <div className="text-right py-3">
        <button
          onClick={() => setIsShow(!isShow)}
          className="btn btn-md btn-primary"
        >
          Click
        </button>
      </div>
      <aside className="">
        {isShow && (
          <div className="side-nav-outer sidebar">
            <p className="navbar-brand text-center w-100 my-4">
              Portfolio Admin
            </p>
            <p className="text-center">
              Welcome {userInfo ? userInfo.name : "placeholder"}
            </p>
            <Nav
              className="d-flex flex-column align-items-center"
              activeKey="/home"
            >
              <AdminAsideNavLink path="heroForm" linkName="Hero Banner" />
              <AdminAsideNavLink path="aboutSection" linkName="About" />
              <AdminAsideNavLink path="skillSection" linkName="Skills" />
              <AdminAsideNavLink
                path="experienceSection"
                linkName="Experience"
              />
              <AdminAsideNavLink
                path="qualificationSection"
                linkName="Qualification"
              />
              <AdminAsideNavLink path="projectSection" linkName="Projects" />
              {userInfo.isAdmin && (
                <AdminAsideNavLink path="userlist" linkName="Users List" />
              )}
              <Nav.Item className="nav-item logout mt-5">
                <Nav.Link className="nav-link" onClick={logoutHandler}>
                  Logout
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        )}
      </aside>
    </>
  );
};

export default AdminAsideNav;
