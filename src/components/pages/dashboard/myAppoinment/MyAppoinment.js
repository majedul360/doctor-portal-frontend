import { format } from "date-fns";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase/Firebase.int";

const MyAppoinment = () => {
  const [user, loading, error] = useAuthState(auth);
  const [appoinments, setAppoinments] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://doctor-2022.herokuapp.com/user/${user.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAppoinments(data);
      })
      .catch((error) => {
        console.log(error?.message);
      });
  }, []);
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Treatment</th>
            <th>Date</th>
            <th>Payment</th>
          </tr>
        </thead>
        <tbody>
          {appoinments?.map((appoinment, index) => (
            <tr key={appoinment._id}>
              <th>{index + 1}</th>
              <td>{appoinment.name}</td>
              <td>{appoinment.treatment}</td>
              <td>{appoinment.date}</td>
              {appoinment.price && !appoinment.paid && (
                <Link to={`/dashboard/payment/${appoinment._id}`}>
                  <button className="btn btn-primary">Pay</button>
                </Link>
              )}
              {appoinment.price && appoinment.paid && <span>paid</span>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyAppoinment;
