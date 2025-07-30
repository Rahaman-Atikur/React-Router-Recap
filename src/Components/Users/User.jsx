import React, { Suspense, useState } from 'react';
import { Link } from 'react-router';
import UserDetails from '../UserDetails/UserDetails';

const User = ({ user }) => {
    const [showInfo, setShowInfo] = useState(false);
    const { id, name, email, phone } = user;
    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

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
            <button onClick={() => setShowInfo(!showInfo)}>{showInfo ? "Hide" : "Detail"}Detail Info</button>
            {
                showInfo && <Suspense fallback={<span>Loading...</span>}>
                    <UserDetails ></UserDetails>
                </Suspense>

            }

        </div>
    );
};

export default User;