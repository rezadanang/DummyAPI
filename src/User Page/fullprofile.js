import React from 'react';

const FullProfile = ({user}) => {
        return (
            <div className="profile">
                <p>User ID      : {user.id}</p>
                <p>Nama Lengkap : {user.title}. {user.firstName} {user.lastName}</p>
                <p>Email        : {user.email}</p>
              </div>
              
        );
};
export default FullProfile;

