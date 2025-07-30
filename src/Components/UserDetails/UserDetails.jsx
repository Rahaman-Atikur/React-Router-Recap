import React from 'react';
import { useLoaderData } from 'react-router';
const UserDetails = () => {
    const user = useLoaderData();
    const { website } = user;
    console.log(user);
    return (
        <div>
            <h2>Hi Okay You are :</h2>
            <h3>{website}</h3>
        </div>
    );
};
export default UserDetails;