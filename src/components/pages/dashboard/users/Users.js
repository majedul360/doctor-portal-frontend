import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase/Firebase.int";
import UserCard from "./UserCard";

const Users = () => {
  const navigate = useNavigate();
  const {
    isLoading,
    error,
    refetch,
    data: users,
  } = useQuery("users", () =>
    fetch(`https://doctor-2022.herokuapp.com/users`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Admin</th>
            <th>User</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => (
            <UserCard
              key={user._id}
              user={user}
              index={index}
              refetch={refetch}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
