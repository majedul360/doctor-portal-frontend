import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase/Firebase.int";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className="navbar bg-base-100 px-2 md:px-8 lg:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/" className="text-xl">
                Home
              </Link>
            </li>

            <li>
              <Link to="/appoinment" className="text-xl">
                Appoinment
              </Link>
            </li>
            <li>
              <Link to="/reviews" className="text-xl">
                Reviews
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-xl">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-xl">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="text-xl">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/registar" className="text-xl">
                Registar
              </Link>
            </li>
            {user ? (
              <li>
                <span className="text-xl" onClick={() => signOut(auth)}>
                  Log Out
                </span>
              </li>
            ) : (
              <li>
                <Link to="/login" className="text-xl">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Doctors Strange</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/" className="text-xl">
              Home
            </Link>
          </li>

          <li>
            <Link to="/appoinment" className="text-xl">
              Appoinment
            </Link>
          </li>
          <li>
            <Link to="/reviews" className="text-xl">
              Reviews
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-xl">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-xl">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="text-xl">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/registar" className="text-xl">
              Registar
            </Link>
          </li>
          {user ? (
            <li>
              <span className="text-xl" onClick={() => signOut(auth)}>
                Log Out
              </span>
            </li>
          ) : (
            <li>
              <Link to="/login" className="text-xl">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>

      {/* drawer added */}
      {user && (
        <div className="navbar-end lg:hidden">
          <label
            tabIndex="0"
            className="btn btn-ghost lg:hidden"
            htmlFor="dashboard"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
      )}
    </div>
  );
};

export default Header;
