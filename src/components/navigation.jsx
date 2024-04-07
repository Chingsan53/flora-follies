import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation.css";

const Navigation = ({ searchTerm, onSearchChange }) => {
  return (
    <Fragment>
      <nav className="navbar">
        {/* <div className="logo"><Link to="/">YourLogo</Link></div> */}
        <ul>
          <li>
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/garden">
              Garden
            </Link>
          </li>
          {/* <li>
            <Link className="nav-link" to="/favorite">
              Favorite
            </Link>
          </li> */}
          {/* <li>
            <Link className="nav-link" to="/weather">
              Weather
            </Link>
          </li> */}

          <div className="search-box">
            <input
              type="text"
              placeholder="Search..."
              className="input"
              value={searchTerm}
              onChange={onSearchChange}
            />
          </div>
        </ul>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
