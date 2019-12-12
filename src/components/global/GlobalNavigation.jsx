import React from "react";
import { Link } from "react-router-dom";

const GlobalNavigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/posts">POST</Link>
        </li>
      </ul>
    </nav>
  );
};

export default GlobalNavigation;
