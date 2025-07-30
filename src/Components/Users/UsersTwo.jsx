import React, { use } from 'react';

const UsersTwo = ({userPromise}) => {
    const users = use(userPromise);
    console.log("user Two data Load:",users);
    return (
        <div>
            
        </div>
    );
};

export default UsersTwo;