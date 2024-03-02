import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const SignUpForm = ({runCardAnimation}) => {

  // to handle the visibility of password field
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handlePasswordVisibility = () => {
    setShowPassword(showPassword => !showPassword);
  }

  const handleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(showConfirmPassword => !showConfirmPassword);
  }

  return (
    <form className='flex flex-col gap-1 mx-20 w-[500] h-[500] py-5 text-sm'>
      <h1 className='font-bold text-center' style={{ fontSize: "2rem" }}>Sign up</h1>
      <p className='text-center mt-3'>
        <span className="opacity-50">Already have an account? </span>
        <span className="opacity-80 underline underline-offset-4 cursor-pointer" onClick={runCardAnimation}>Login</span>
      </p>

      <div className='pt-2'>
        <h3 className='opacity-55 py-1'>Username</h3>
        <input type="text" onChange={(e) => handleEmailChange(e)} placeholder='username123' className='px-3 py-3 mt-1 opacity-55 w-full border border-[#8895A8ff] rounded-[12px] outline-none' />
      </div>

      <div className='pt-3'>
        <h3 className='opacity-55 py-1'>E-mail</h3>
        <input type="email" onChange={(e) => handleEmailChange(e)} placeholder='example@gmail.com' className='px-3 py-3 mt-1 opacity-55 w-full border border-[#8895A8ff] rounded-[12px] outline-none' />
      </div>

      <div className='pt-4'>
        <h3 className='opacity-55 pb-2'>Password</h3>
        <div className='flex border items-center border-[#8895A880] rounded-[12px]'>
          <input type={showPassword ? "text" : "password"} placeholder='@#*%' className='px-3 pt-2 pb-3 mt-1 opacity-55 w-full border-none outline-none rounded-[12px]' />
          <button type='button' onClick={handlePasswordVisibility}>
            {showPassword ? (
              <img src="/assets/icons/eye-icon.png" alt="eye-icon" height={30} width={50} className='pr-2 pl-4 py-1 mr-4 border-l border-l-[#8895A880]'/>
              ) : (
              <img src="/assets/icons/hide-eye-icon.png" alt="hide-eye-icon" height={30} width={50} className='pr-2 pl-4 py-1 mr-4 border-l border-l-[#8895A880]'/>
            )}
          </button>
        </div>
      </div>

      <div className='pt-4'>
        <h3 className='opacity-55 pb-2'>Confirm Password</h3>
        <div className='flex border items-center border-[#8895A880] rounded-[12px]'>
          <input type={showConfirmPassword ? "text" : "password"} placeholder='@#*%' className='px-3 pt-2 pb-3 mt-1 opacity-55 w-full border-none outline-none rounded-[12px]' />
          <button type='button' onClick={handleConfirmPasswordVisibility}>
            {showConfirmPassword ? (
              <img src="/assets/icons/eye-icon.png" alt="eye-icon" height={30} width={50} className='pr-2 pl-4 py-1 mr-4 border-l border-l-[#8895A880]'/>
              ) : (
              <img src="/assets/icons/hide-eye-icon.png" alt="hide-eye-icon" height={30} width={50} className='pr-2 pl-4 py-1 mr-4 border-l border-l-[#8895A880]'/>
            )}
          </button>
        </div>
      </div>

      <button className='rounded-[1.1rem] px-3 py-3 mt-5 w-full bg-[#07466Dff] text-white font-semibold' style={{ fontSize: "1.1.25rem" }} onClick={runCardAnimation}>Sign up</button>
      <div className="divider">
        <span className="divider-text">OR</span>
      </div>

      <button className="border border-[#8895A880] rounded-full px-2 py-2 my-4">
        <div className='flex'>
          <img src="/assets/icons/google-icon.svg" alt="google-icon" height={30} width={30} className='m-1' />
          <span className='mx-4 w-full self-center opacity-50 font-medium'>Continue with Google</span>
        </div>
      </button>

      <button className="border border-[#8895A880] rounded-full px-2 py-2">
        <div className='flex'>
          <img src="/assets/icons/facebook-icon.svg" alt="google-icon" height={30} width={30} className='m-1'/>
          <span className='mx-4 w-full self-center opacity-50 font-medium'>Continue with Google</span>
        </div>
      </button>

      
    </form>
  )
}

export default SignUpForm