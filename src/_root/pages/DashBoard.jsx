import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../services/firebase';
import { UserAuth } from '../../context/AuthContext';

const DashBoard = () => {

  const { user, logOut } = UserAuth();


  const handleLogOut = () => {
    
  }

  return (
    <div>
      <h1> Welcome {user.displayName}</h1>
    </div>
  )
}

export default DashBoard