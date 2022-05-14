import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase/Firebase.int";

const MyAppoinment = () => {
  const [user, loading, error] = useAuthState(auth);
  const [appoinments, setAppoinments] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAppoinments(data));
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
          </tr>
        </thead>
        <tbody>
          {appoinments.map((appoinment, index) => (
            <tr key={appoinment._id}>
              <th>{index + 1}</th>
              <td>{appoinment.name}</td>
              <td>{appoinment.treatment}</td>
              <td>{appoinment.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyAppoinment;
