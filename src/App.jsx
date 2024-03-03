import AuthLayout from './_auth/AuthLayout';
import SignInForm from './_auth/forms/SignInForm';
import SignUpForm from './_auth/forms/SignUpForm';
import RootLayout from './_root/RootLayout';

import { Home, DashBoard } from './_root/pages';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './services/firebase';

import './index.css';

import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


function App() {


  const [user, setUser] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user) {
        setUser(user);
        setIsFetching(false);
        return;
      }

      setUser(null);
      setIsFetching(false);
    });

    return () => unsubscribe();
  }, [])

  if(isFetching) {
    return <h1>Loading...</h1>
  }

  return (
    <main className='flex h-screen w-screen overflow-hidden'>
      <Routes>
        {/* Public Route if not authenticated send them to one of the outlet routes */}
        <Route element={<AuthLayout />}>
          <Route path='/sign-in' element={ <SignInForm /> } />
          <Route path='/sign-up' element={ <SignUpForm /> } />
        </Route>



        {/* Private Route */}
        <Route element={<RootLayout user={user} />}>
          <Route index path='/' element={<Home />}/>
          <Route path='/dashboard' element={<DashBoard />}/>
        </Route>
        

      </Routes>
    </main>
  )
}
export default App
