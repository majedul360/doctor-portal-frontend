import React from "react";

const UserCard = ({ user, index, refetch }) => {
  const { email, role } = user;
  const addAdmin = () => {
    fetch(`https://doctor-2022.herokuapp.com/users/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button className="btn btn-secondary" onClick={addAdmin}>
            Add Admin
          </button>
        )}
      </td>
      <td>
        <button className="btn btn-succes">Remove User</button>
      </td>
    </tr>
  );
};

export default UserCard;
