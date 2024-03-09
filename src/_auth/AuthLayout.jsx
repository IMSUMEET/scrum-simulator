import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SignInForm from './forms/SignInForm';
import Carousel from '../component/Carousel';
import SignUpForm from './forms/SignUpForm';
import { UserAuth } from '../context/AuthContext';



const AuthLayout = () => {

  const { user } = UserAuth();

  const [clickedSignUp, setClickedSignUp] = useState(false);

  const toggleClickedSignUp = () => {
    setClickedSignUp(prevValue => !prevValue);
  }


  const initialImageSetting =  { height: "100%", width: "60%", x: "15%", filter: "blur(0)"};

  const imageSetting = clickedSignUp ? { width: "100%", height: "unset", x: "0%", filter: "blur(5px)", "pointer-events": "none"} : initialImageSetting;

  const cardSetting = clickedSignUp ? {scale: 1, opacity: 1} : {scale: 0.1, opacity: 0};


  return (
    <>
      { user === undefined && (<></>) }
      { user && user.uid && (<Navigate to='/' />) }
      { user === null && (
        <div className='w-full h-full relative'>
          <section className='flex w-full h-full justify-end'>
            <motion.div className={`flex flex-col min-w-[50%] z-10 h-screen overflow-hidden absolute top-0 left-0`} animate={{ x: clickedSignUp ? "-100%" : '0' }} transition={{ type: "tween", duration: 0.5 }}>
              {/* name and logo */}
              <div className='flex justify-start items-center gap-2 mt-4 mb-4 ml-9'>
                <img src="/assets/icons/Logo.svg" alt="logo" height={70} width={60} />
                <h1 className='pt-4 h2-bold letter-spacing-normal'>SCRUM SIMULATOR</h1>
              </div>
              <SignInForm runCardAnimation={toggleClickedSignUp}/>
            </motion.div>

            <motion.div style={{background: `linear-gradient(to right, var(--indigo-dye), var(--alice-blue)`, ...initialImageSetting}} 
            animate={imageSetting} transition={{ type: "tween", duration: 0.5 }} className='w-50%'>
              <Carousel />
            </motion.div>

            <motion.div style={{position: 'absolute', bottom: "50px", left: "50%", width: "600px", height: "90%", background: "white", borderRadius: "5%", translateX: "-50%"}} className={`custom-scrollbar z-20 opacity-0 ${clickedSignUp ? "pointer-events-auto" : "pointer-events-none"}`}
            animate={cardSetting} transition={{ type: "tween", duration: 0.5}} >
              <SignUpForm runCardAnimation={toggleClickedSignUp} />
            </motion.div>

          </section>
        </div>
      )}
    </>
  )
}

export default AuthLayout


