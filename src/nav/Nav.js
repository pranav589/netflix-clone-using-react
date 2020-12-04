import React, { useState, useEffect } from "react";
import "./Nav.css";
import { Link, useHistory } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import { auth } from "../firebase/firebase";

function Nav({ handleChange, handleSubmit, inputVal, user }) {
  const [dropdown, setDropdown] = useState(false);

  const history = useHistory("");
  console.log(user);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  const logout = (e) => {
    e.preventDefault();
    auth.signOut();
    history.push("/login");
  };

  return (
    <nav className={`nav nav_black`}>
      <img
        className="nav_logo"
        src="https://github.com/pranav589/netflix-clone-using-react/blob/master/src/580b57fcd9996e24bc43c529.png?raw=true"
        onClick={() => history.push("/netflix")}
      />
      <div className="search_white">
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input"
            placeholder="Search"
            value={inputVal}
            onChange={handleChange}
          />
          <i className="fas fa-search" onClick={handleSubmit}></i>
        </form>
      </div>

      <img
        className="nav_avatar"
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        onClick={handleDropdown}
      />
      <div className={dropdown ? `dropdown` : `hide`}>
        <ul className="dropdown__ul">
          <div className="user">
            <Avatar />
            <li>Hello,{user && user.displayName}</li>
          </div>

          <hr />
          <li className="logout" onClick={logout}>
            Logout
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
