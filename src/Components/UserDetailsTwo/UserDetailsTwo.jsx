import React from 'react';

const UserDetailsTwo = ({userPromise}) => {
    const {name,username} = use(userPromise);
    console.log(name,username);
    return (
        <div>
            <p><small></small></p>
        </div>
    );
};

export default UserDetailsTwo;