import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "react-bootstrap";

import { login } from "../actions/userActions";

const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      history.push("/dashboard/heroForm");
    }
  }, [userInfo, history]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login(email, password));
  };

  return (
    <section className="login">
      <div className="login-form shadow">
        <h1 className="text-center mb-4">Login</h1>
        {error && <Alert variant="danger">{error}</Alert>}
        {loading && <h6>loading...</h6>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="text-center ">
            <button
              type="submit"
              className="btn btn-md btn-primary my-4 px-4 py-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginScreen;
