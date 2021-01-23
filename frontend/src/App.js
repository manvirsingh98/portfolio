import React from "react";
import { Container } from "react-bootstrap";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header";

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import DashboardScreen from "./screens/DashboardScreen";
import UserListScreen from "./screens/UserListScreen";
import { useSelector } from "react-redux";
// import { getPortfolio } from "./actions/portfolioActions";
const App = () => {
  // const dispatch = useDispatch();

  // const portfolioInfo = useSelector((state) => state.portfolioInfo);
  // const { loading, error, portfolio } = portfolioInfo;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  // useEffect(() => {
  //   dispatch(getPortfolio());
  // }, [dispatch]);

  return (
    // <div>
    //   <h1>Welcome to portfolio</h1>
    //   {/* <h2>{portfolio}</h2> */}
    //   {portfolio.basics && console.log(portfolio.basics)}
    // </div>
    <>
      <Router>
        <main className="py-3">
          <PublicRoute path="/" component={HomeScreen} exact />

          <Container>
            <ProtectedRoute
              userInfo={userInfo}
              path="/dashboard"
              component={DashboardScreen}
              exact
            />
            <ProtectedAuthRoute
              userInfo={userInfo}
              path="/userlist"
              component={UserListScreen}
            />
          </Container>
        </main>
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

export const ProtectedAuthRoute = ({
  component: Component,
  userInfo,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (userInfo && userInfo.isAdmin) {
          return <Component {...rest} {...props} />;
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
