import React from 'react';
import { useLoaderData } from 'react-router';
import User from './User';

const Users = () => {
  
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <p>This is users page</p>
            <div>
                {
                    users.map((user) => <User key={user.id} user={user}></User>)
                }
            </div>

        </div>
    );
};

export default Users;