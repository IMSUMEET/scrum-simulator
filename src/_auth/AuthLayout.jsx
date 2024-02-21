import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import RootLayout from '../_root/RootLayout';

const AuthLayout = () => {

  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to='/' />
       ) :
      <>
        <section className='flex flex-1 w-full h-full'>
          <div className=' flex flex-col w-2/3'>
            {/* name and logo */}
            <div className='flex justify-start items-center gap-2 mt-4 mb-8 ml-9'>
              <img src="/assets/icons/Logo.svg" alt="logo" height={70} width={60} />
              <h1 className='pt-4 h2-bold letter-spacing-normal'>SCRUM SIMULATOR</h1>
            </div>
            <Outlet />
          </div>
          <div className='w-full h-full'>
            <img src="/assets/images/luffy.jpg" alt="dummy image" className='object-cover h-full w-full' />
          </div>
          {/* image component */}
        </section>
      </>
      }
    </>
  )
}

export default AuthLayout