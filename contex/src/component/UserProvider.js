import React from 'react'
import UserContex from './UserContex'

const UserProvider=({children})=>{
    const User = {name: "React Developer"};
  return (
    <UserContex.Provider value={User}>
        {children}
    </UserContex.Provider>
  );
};

export default UserProvider;
