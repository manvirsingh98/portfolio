import React from "react";
import { Container } from "react-bootstrap";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import DashboardScreen from "./screens/DashboardScreen";
import { useSelector } from "react-redux";

const App = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <>
      <Router>
        <PublicRoute path="/" component={HomeScreen} exact />

        <Container>
          <ProtectedRoute
            userInfo={userInfo}
            path="/dashboard"
            component={DashboardScreen}
          />
        </Container>

        <Route path="/login" component={LoginScreen} />
      </Router>
    </>
  );
};

export const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <>
            <Header />
            <Component {...rest} {...props} />
          </>
        );
      }}
    />
  );
};

export const ProtectedRoute = ({ component: Component, userInfo, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (userInfo) {
          return (
            <>
              {/* <AdminAsideNav /> */}
              <Component {...rest} {...props} />
            </>
          );
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
              }}
            />
          );
        }
      }}
    />
  );
};

export default App;
