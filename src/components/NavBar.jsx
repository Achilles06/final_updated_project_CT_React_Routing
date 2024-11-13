import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName="active-link">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/browse-characters" activeClassName="active-link">
                        Browse Characters
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/comics" activeClassName="active-link">
                        Comics
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
