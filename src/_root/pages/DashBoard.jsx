import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../services/firebase';

const DashBoard = () => {


  const handleSignOut = () => {
    signOut(auth)
    .then(() => {console.log("Sign Out")})
    .catch((error) => {console.log(error)});
  }

  return (
    <div>DashBoard</div>
  )
}

export default DashBoard