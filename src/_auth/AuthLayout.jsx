import React, { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import RootLayout from '../_root/RootLayout';
import { motion } from 'framer-motion';


const FormStuff = () => {
  return (
    <motion.div animate={{ width: clickedSignUp ? "0px" : "650px" }} >
      <motion.div className={`flex flex-col min-w-[650px] max-h-screen overflow-scroll absolute top-0 left-0`} animate={{ x: clickedSignUp ? "-100%" : '0' }} transition={{ type: "tween", duration: 1 }}>
        {/* name and logo */}
        <div className='flex justify-start items-center gap-2 mt-4 mb-8 ml-9'>
          <img src="/assets/icons/Logo.svg" alt="logo" height={70} width={60} />
          <h1 className='pt-4 h2-bold letter-spacing-normal'>SCRUM SIMULATOR</h1>
        </div>
        <Outlet />
      </motion.div>
    </motion.div>
  )
}

const AuthLayout = () => {

  const isAuthenticated = false;

  const [clickedSignUp, setClickedSignUp] = useState(false);
  const imageSetting = clickedSignUp ? { width: "100%", height: "unset", x: "0%"} : { height: "100%", width: "unset", x: "15%" }


  return (
    <>
      {isAuthenticated ? (
        <Navigate to='/' />
      ) :
        <div className='w-full h-full'>
          <section className='flex w-full h-full justify-end'>
              <motion.div className={`flex bg-white flex-col min-w-[760px] z-10 max-h-screen overflow-scroll absolute top-0 left-0`} animate={{ x: clickedSignUp ? "-100%" : '0' }} transition={{ type: "tween", duration: 1 }}>
                {/* name and logo */}
                <div className='flex justify-start items-center gap-2 mt-4 mb-8 ml-9'>
                  <img src="/assets/icons/Logo.svg" alt="logo" height={70} width={60} />
                  <h1 className='pt-4 h2-bold letter-spacing-normal'>SCRUM SIMULATOR</h1>
                </div>
                <Outlet />
              </motion.div>


            <motion.div animate={imageSetting} transition={{ type: "tween", duration: 1 }}>
              <img src="/assets/images/luffy.jpg" alt="dummy image" className='object-cover h-full w-full' onClick={() => setClickedSignUp(!clickedSignUp)} />
            </motion.div>
            {/* image component */}
          </section>
        </div>
      }
    </>
  )
}

export default AuthLayout


