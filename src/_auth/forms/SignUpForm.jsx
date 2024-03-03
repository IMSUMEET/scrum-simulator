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

  
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const [isFormFilled, setIsFormFilled] = useState(false);
  
  
  // Validation
  const [isInvalidFormValues, setIsInvalidFormValues] = useState({
    username: false,
    email: false,
    password: false,
    confirmPassword: false,
  });
  
  function isValidUsername(username) {
    const regex = /^(?![0-9])[A-Za-z0-9]{3,16}$/;
    return regex.test(username);
  }
  
  function isValidEmail(email) {
    const regex = /^(?![0-9])[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/;
    return regex.test(email);
  }
  
  function isValidPassword(password) {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    return regex.test(password);
  }
  
  // function isValidConfirmPassword(ConfirmPassword , password) {}
  
  
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    const isValid = isValidUsername(e.target.value);
    console.log(isValid);
    setIsInvalidFormValues({...isInvalidFormValues, username: !isValid});

    if (isInvalidFormValues.username || isInvalidFormValues.email || isInvalidFormValues.password || !isValid) {
      setIsFormFilled(false);
    }else {
      setIsFormFilled(true);
    }
  }
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    const isValid = isValidEmail(e.target.value);
    setIsInvalidFormValues({...isInvalidFormValues, email: !isValid});

    if (isInvalidFormValues.username || isInvalidFormValues.email || isInvalidFormValues.password || !isValid) {
      setIsFormFilled(false);
    }else {
      setIsFormFilled(true);
    }
  }
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    const isValid = isValidPassword(e.target.value);
    setIsInvalidFormValues({...isInvalidFormValues, password: !isValid});

    if (isInvalidFormValues.username || isInvalidFormValues.email || isInvalidFormValues.password || !isValid) {
      setIsFormFilled(false);
    }else {
      setIsFormFilled(true);
    }
  }
  
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    const isValid = password === e.target.value ? true : false;
    setIsInvalidFormValues({...isInvalidFormValues, confirmPassword: !isValid})

    if (isInvalidFormValues.username || isInvalidFormValues.email || isInvalidFormValues.password || !isValid) {
      setIsFormFilled(false);
    }else {
      setIsFormFilled(true);
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();

    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  }

  return (
    <form className='flex flex-col gap-1 mx-20 w-[500] h-[500] py-5 text-sm' onSubmit={handleSubmit}>
      <h1 className='font-bold text-center' style={{ fontSize: "2rem" }}>Sign up</h1>
      <p className='text-center mt-3'>
        <span className="opacity-50">Already have an account? </span>
        <span className="opacity-80 underline underline-offset-4 cursor-pointer" onClick={runCardAnimation}>Login</span>
      </p>

      <div className='pt-2'>
        <h3 className='opacity-55 py-1'>Username</h3>
        <input type="text" onChange={(e) => handleUsernameChange(e)} value={username} placeholder='username123' className='px-3 py-3 mt-1 opacity-55 w-full border border-[#8895A8ff] rounded-[12px] outline-none invalid:invalid:border-red-600' required/>
        <p className={`text-red-600 pt-1 px-2 ${isInvalidFormValues.username ? "" : "hidden"}`}>Username must start with letter, 3-16 characters long without special characters!</p>
      </div>

      <div className='pt-3'>
        <h3 className='opacity-55 py-1'>E-mail</h3>
        <input type="email" onChange={(e) => handleEmailChange(e)} value={email} placeholder='example@gmail.com' className='px-3 py-3 mt-1 opacity-55 w-full border border-[#8895A8ff] rounded-[12px] outline-none invalid:invalid:border-red-600' required/>
        <p className={`text-red-600 pt-1 px-2 ${isInvalidFormValues.email ? "" : "hidden"}`}>Please enter a valid email that doesn't start with number!</p>
      </div>

      <div className='pt-4'>
        <h3 className='opacity-55 pb-2'>Password</h3>
        <div className='flex border items-center border-[#8895A880] rounded-[12px]'>
          <input type={showPassword ? "text" : "password"} onChange={(e) => handlePasswordChange(e)} value={password} placeholder='@#*%' className='px-3 pt-2 pb-3 mt-1 opacity-55 w-full border-none outline-none rounded-[12px] invalid:invalid:border-red-600'  required/>
          <button type='button' onClick={handlePasswordVisibility}>
            {showPassword ? (
              <img src="/assets/icons/eye-icon.png" alt="eye-icon" height={30} width={50} className='pr-2 pl-4 py-1 mr-4 border-l border-l-[#8895A880]'/>
              ) : (
              <img src="/assets/icons/hide-eye-icon.png" alt="hide-eye-icon" height={30} width={50} className='pr-2 pl-4 py-1 mr-4 border-l border-l-[#8895A880]'/>
            )}
          </button>
        </div>
        <p className={`text-red-600 pt-1 px-2 ${isInvalidFormValues.password ? "" : "hidden"}`}>Password must be 8-20 characters with atleast 1 letter, 1 number and 1 special character</p>
      </div>

      <div className='pt-4'>
        <h3 className='opacity-55 pb-2'>Confirm Password</h3>
        <div className='flex border items-center border-[#8895A880] rounded-[12px]'>
          <input type={showConfirmPassword ? "text" : "password"} onChange={(e) => {handleConfirmPasswordChange(e)}} value={confirmPassword} placeholder='@#*%' className='px-3 pt-2 pb-3 mt-1 opacity-55 w-full border-none outline-none rounded-[12px] invalid:invalid:border-red-600' required/>
          <button type='button' onClick={handleConfirmPasswordVisibility}>
            {showConfirmPassword ? (
              <img src="/assets/icons/eye-icon.png" alt="eye-icon" height={30} width={50} className='pr-2 pl-4 py-1 mr-4 border-l border-l-[#8895A880]'/>
              ) : (
              <img src="/assets/icons/hide-eye-icon.png" alt="hide-eye-icon" height={30} width={50} className='pr-2 pl-4 py-1 mr-4 border-l border-l-[#8895A880]'/>
            )}
          </button>
        </div>
        <p className={`text-red-600 pt-1 px-2 ${isInvalidFormValues.confirmPassword ? "" : "hidden"}`}>Passwords don't match!</p>
      </div>

      <button className='rounded-[1.1rem] px-3 py-3 mt-5 w-full bg-[#07466Dff] text-white font-semibold' style={{ fontSize: "1.1.25rem" }} onClick={isFormFilled ? runCardAnimation : "" }>Sign up</button>
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