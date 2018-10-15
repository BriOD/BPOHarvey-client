import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="left">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="https://www.redcross.org/">Red Cross</Link>
          </li>
          <li>
            <Link to="/register">Pledge</Link>
          </li>
          <li>
            <a
              href="http://borgatapokeropen.blog.theborgata.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Borgata Blog
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
