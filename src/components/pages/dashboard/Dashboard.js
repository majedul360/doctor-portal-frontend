import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
