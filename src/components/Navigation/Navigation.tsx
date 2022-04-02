import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/public">Public</NavLink>
      </li>
      <li>
        <NavLink to="/private1">Private1</NavLink>
      </li>
      <li>
        <NavLink to="/private2">Private2</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
