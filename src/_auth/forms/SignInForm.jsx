import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


import { useState } from 'react';
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase';

import { UserAuth } from '../../context/AuthContext';
import Loader from '../../component/Loader';



const SignInForm = ({runCardAnimation}) => {

  const {googleSignIn , facebookSignIn} = UserAuth();
  
  const navigate = useNavigate();

  // to handle the visibility of password field
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const handlePasswordVisibility = () => {
    setShowPassword(showPassword => !showPassword);
  }

  const handleEmailChange = (e) => {
    setemail(e.target.value);
    setError(false);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError(false);
  }

  const handleSignIn = () => {
    setIsLoading(true);
    if(!email || !password) return;
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
      setIsLoading(false);
      navigate('/');
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(true);
      console.log(errorCode, errorMessage);
    });
  }

  function isValidEmail(email) {
    const regex = /^(?![0-9])[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/;
    return regex.test(email);
  }

  const handlePasswordReset = () => {
    const emailForPasswordReset = prompt("Enter your email to reset password!!");
    if(isValidEmail(emailForPasswordReset)){
      sendPasswordResetEmail(auth, emailForPasswordReset);
      alert("Email has been sent");
    }else{
      alert("Invalid Email");
    }
  }

  // ---------- Google sign in handling ----------

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  const handleFacebookSignIn = async () => {
    try {
      await facebookSignIn();
    } catch (error) {
      console.log(error);
    }

  }


  return (
    <form className='flex flex-col gap-2 w-[474px] mx-auto px-auto h-full justify-evenly overflow-x-hidden'>
      <h1 className='font-bold' style={{ fontSize: "2rem" }}>Sign in</h1>
      <p>
        <span className="opacity-50">Don't have an account? </span>
        <span className="opacity-80 underline underline-offset-4 cursor-pointer" onClick={runCardAnimation}>Create now</span>
      </p>
      
      <div className=''>
        <h3 className='opacity-55 px-2'>E-mail</h3>
        <input type="email" value={email} onChange={(e) => handleEmailChange(e)} placeholder='example@gmail.com' className={`px-3 py-3 mt-1 opacity-55 w-full border  rounded-[12px] outline-none  ${error ? " border-red-600" : "border-[#8895A8ff]"}`} />
      </div>

      <div>
        <h3 className='opacity-55 px-2'>Password</h3>
        <div className={`flex border items-center  ${error ? " border-red-400" : "border-[#8895A880]"} rounded-[12px]`}>
          <input type={showPassword ? "text" : "password"} onChange={(e) => handlePasswordChange(e)} placeholder='@#*%' className='px-3 pt-2 pb-3 mt-1 opacity-55 w-full border-none outline-none rounded-[12px]' />
          <button type='button' onClick={handlePasswordVisibility}>
            {showPassword ? (
              <img src="/assets/icons/eye-icon.png" alt="eye-icon" height={30} width={50} className='pr-2 pl-4 py-1 mr-4 border-l border-l-[#8895A880]'/>
              ) : (
              <img src="/assets/icons/hide-eye-icon.png" alt="hide-eye-icon" height={30} width={50} className='pr-2 pl-4 py-1 mr-4 border-l border-l-[#8895A880]'/>
            )}
          </button>
        </div>
      </div>

      {error && <p className='text-center text-red-600'>Invaid Credentials</p>}

      <div className='flex justify-between py-3'>
        <div className='opacity-50'>
          <input className='cursor-pointer' type="checkbox" />
          <span className='px-2'>Remember me</span>
        </div>
        <span onClick={handlePasswordReset} className="opacity-80 underline underline-offset-4 cursor-pointer">Forgot Password?</span>
      </div>

      <button className='rounded-[1.1rem] px-3 py-3 mt-1 w-full bg-[#07466Dff] text-white font-semibold' style={{ fontSize: "1.1.25rem" }} type='button' onClick={handleSignIn}>{isLoading ? (
              <Loader/>
            ): "Sign in"}</button>
      <div className="divider">
        <span className="divider-text">OR</span>
      </div>

      <button className="border border-[#8895A880] rounded-full px-2 py-2 mb-2" type='button'>
        <div className='flex items-center justify-center'>
          <img src="/assets/icons/google-icon.svg" alt="google-icon" height={30} width={30} className='m-1' />
          {/* <img src='/assets/icons/Loader.svg' /> */}
          <div className='w-full self-center opacity-50 font-medium' onClick={handleGoogleSignIn}>Sign in</div>
        </div>
      </button>

      <button className="border border-[#8895A880] rounded-full px-2 py-2" type='button'>
        <div className='flex'>
          <img src="/assets/icons/facebook-icon.svg" alt="google-icon" height={30} width={30} className='m-1'/>
          <span className='mx-4 w-full self-center opacity-50 font-medium' onClick={handleFacebookSignIn}>Continue with Facebook</span>
        </div>
      </button>
    </form>
  )
}

export default SignInForm