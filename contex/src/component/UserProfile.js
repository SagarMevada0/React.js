import React,{useContext} from "react";
import UserContex from "./UserContex";

const UserProfile =()=>{
    const user =useContext(UserContex);
  return <h2>I am,{user.name}</h2>
   
  
};

export default UserProfile;
