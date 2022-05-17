import React from "react";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../customHooks/Admin";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/Firebase.int";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content px-20 pt-8">
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li>
            <Link to="/dashboard">My Appoinment</Link>
          </li>
          <li>
            <Link to="/dashboard/reviews">My Reviews</Link>
          </li>
          {admin && (
            <>
              <li>
                <Link to="/dashboard/users">All Users</Link>
              </li>
              <li>
                <Link to="/dashboard/doctors">Add Doctors</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
