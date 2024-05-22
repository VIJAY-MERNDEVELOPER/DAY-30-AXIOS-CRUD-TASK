import React, { useEffect } from "react";
import { UseData } from "../contexts/Data";
import { Link } from "react-router-dom";

function Dashboard() {
  const {
    users,
    setUsers,
    viewData,
    formData,
    setFormData,
    setViewData,
    handleDelete,
    isEdit,
    data,
    setIsEdit,
  } = UseData();

  useEffect(() => {
    data();
  }, []);

  return (
    <div className="container ">
      <h1
        style={{ color: "whitesmoke", mixBlendMode: "difference" }}
        className="text-center"
      >
        USER MANAGEMENT
      </h1>
      <table className="table">
        <thead>
          <tr className="text-center">
            <th scope="col">Id</th>
            <th scope="col">UserName</th>
            <th scope="col">Email</th>
            <th scope="col">User Roles</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody className="text-center">
          {users.map((user, id) => {
            return (
              <tr key={id}>
                <th scope="row">{user.id}</th>
                <td>{user.username}</td>
                <td>{user.email}</td>

                <td>
                  <Link
                    to={`/user/${user.id}`}
                    className="btn btn-secondary m-1"
                    onClick={() => setViewData({ ...user })}
                  >
                    View
                  </Link>
                  <Link
                    to={`/edit/${user.id}`}
                    className="btn btn-primary m-1"
                    onClick={() => {
                      console.log(isEdit);
                      setFormData({ ...user });

                      setIsEdit(true);
                      console.log(user);
                      console.log(formData);
                      console.log(isEdit);
                    }}
                  >
                    Edit
                  </Link>

                  <span
                    className="btn btn-danger"
                    onClick={() => {
                      handleDelete(user.id);
                    }}
                  >
                    Delete
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
