import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const SignInForm = ({runCardAnimation}) => {

  // to handle the visibility of password field
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordVisibility = () => {
    setShowPassword(showPassword => !showPassword);
  }

  const [email, setemail] = useState("")
  const handleEmailChange = (e) => {
    setemail(e.target.value)
  }



  return (
    <form className='flex flex-col gap-4 mx-20 px-10'>
      <h1 className='font-bold' style={{ fontSize: "2rem" }}>Sign in</h1>
      <p>
        <span className="opacity-50">Don't have an account? </span>
        <span className="opacity-80 underline underline-offset-4 cursor-pointer" onClick={runCardAnimation}>Create now</span>
      </p>
      <div className='pt-3'>
        <h3 className='opacity-55 py-2'>E-mail</h3>
        <input type="email" value={email} onChange={(e) => handleEmailChange(e)} placeholder='example@gmail.com' className='px-3 py-3 mt-1 opacity-55 w-full border border-[#8895A8ff] rounded-[12px] outline-none' />
      </div>

      <div className='pt-3'>
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

      <div className='flex justify-between py-3'>
        <div className='opacity-50'>
          <input className='cursor-pointer' type="checkbox" />
          <span className='px-2'>Remember me</span>
        </div>
        <span className="opacity-80 underline underline-offset-4 cursor-pointer">Forgot Password?</span>
      </div>
      <button className='rounded-[1.1rem] px-3 py-3 mt-1 w-full bg-[#07466Dff] text-white font-semibold' style={{ fontSize: "1.1.25rem" }} >Sign in</button>
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

export default SignInForm