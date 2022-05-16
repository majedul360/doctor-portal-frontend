import React from "react";

const UserCard = ({ user, index }) => {
  const { email } = user;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        <button className="btn btn-secondary">Add Admin</button>
      </td>
      <td>
        <button className="btn btn-succes">Remove User</button>
      </td>
    </tr>
  );
};

export default UserCard;
