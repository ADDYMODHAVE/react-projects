import React from "react";

import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import "./MainNavigation.css";

const MainNavigation = (props) => {
  const navigate = useNavigate();

  const [userLogin, setUserLogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("idToken") == null) {
      setUserLogin(false);
    } else {
      setUserLogin(true);
    }
  }, []);

  const logoutHandler = async () => {
    await localStorage.removeItem("idToken");
    setUserLogin(false);
    navigate("/login");
    alert("Logout Successful");
  };
  return (
    <div className="mainNav">
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>{" "}
        </li>
        {userLogin && (
          <>
            {" "}
            <li>
              <NavLink to="/expenses">Expenses</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
          </>
        )}

        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink onClick={logoutHandler}>Logout</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MainNavigation;
