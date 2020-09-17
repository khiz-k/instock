import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './atoms/logo-instock.svg';

function onPaths(paths) {
  return (match, location) => {
    return paths.includes(location.pathname);
  };
}

const Navbar = () => {
  return (
    <nav id="navbar" className="navbar">
      <div className="container navbar__content">
        <div className="navbar__start">
          <Link to="/">
            <img src={ logo } alt="" />
          </Link>
        </div>
        <div className="navbar__end">
          <ul className="navbar__nav">
            <li className="navbar__nav-item">
              <NavLink to="/inventory"
                       isActive={ onPaths(['/', '/inventory']) }>
                Inventory
              </NavLink>
            </li>
            <li className="navbar__nav-item">
              <NavLink to="/warehouses">
                Locations
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
