import React, { useEffect } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { Table, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listUsers } from "../actions/userActions";

const UserList = () => {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(listUsers());
  }, [dispatch]);

  return (
    <>
      <div className="userlist">
        <h1>Users</h1>
        {loading ? (
          <h6>loading...</h6>
        ) : error ? (
          <Alert variant="danger">{error}</Alert>
        ) : (
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ADMIN</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>
                    <a href={`mailto:${user.email}`}>{user.email}</a>
                  </td>
                  <td>
                    {user.isAdmin ? (
                      <i
                        className="fas fa-check"
                        style={{ color: "green" }}
                      ></i>
                    ) : (
                      <i className="fas fa-times" style={{ color: "red" }}></i>
                    )}
                  </td>
                  <td>
                    <AiOutlineEdit />

                    <AiOutlineDelete />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    </>
  );
};

export default UserList;
