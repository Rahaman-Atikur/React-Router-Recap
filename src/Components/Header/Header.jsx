import React from 'react';
import { Link, NavLink } from 'react-router';
import "./Header.css";

const Header = () => {
    return (
        <div>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/laptop">Laptop</NavLink>
                <NavLink to="/mobiles">Mobiles</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/usersTwo">UsersTwo</NavLink>
                <NavLink to="/posts">Posts</NavLink>
            </nav>

        </div>
    );
};

export default Header;