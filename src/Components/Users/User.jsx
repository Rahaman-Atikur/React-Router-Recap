import React from 'react';
import { Link } from 'react-router';

const User = ({ user }) => {
    const {id, name, email, phone } = user;
    const userStyle = {
        border: "20px solid yellow",
        borderRadius: "20px ",
        padding: "10px",
        margin: "10px"
    }
    return (
        <div style={userStyle}>
            <p>{name}</p>
            <p>{email}</p>
            <p><small>{phone}</small></p>
            <Link to={`/users/${id}`}>Show Details</Link>

        </div>
    );
};

export default User;