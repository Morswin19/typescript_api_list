import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NotMatch.sass";

//this view will shown when user type wrong path
const NotMatch = () => {
  return (
    <div id="notMatch">
      <h1>THIS SITE CANNOT BE REACHED</h1>
      <h2>click on the button to go to the main page</h2>
      <NavLink to="/">
        <button>HOME</button>
      </NavLink>
    </div>
  );
};

export default NotMatch;
