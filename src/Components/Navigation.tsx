import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/Navigation.sass";

//component with main navlinks
const Navigation: React.FC = () => (
  <>
    <nav>
      <ul className="naviList">
        <li>
          <NavLink to="/" exact>
          My List
          </NavLink>
        </li>
        <li>
          <NavLink to="/aboutus">
          About us
          </NavLink>
        </li>
      </ul>
    </nav>
  </>
);

export default Navigation;
