import { Navigate, Outlet } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const RootLayout = () => {

  const { user } = UserAuth();
  console.log(user ? user.uid : null);
  
  return (
    <>
      { user === undefined && (<></>)}
      { user === null && (< Navigate to="/sign-in"/>) }
      { user && user.uid && (<Outlet />) }
    </>
  )
}

export default RootLayout