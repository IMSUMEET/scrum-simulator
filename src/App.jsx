import AuthLayout from './_auth/AuthLayout';
import SignInForm from './_auth/forms/SignInForm';
import SignUpForm from './_auth/forms/SignUpForm';
import RootLayout from './_root/RootLayout';

import { DashBoard } from './_root/pages';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './services/firebase';

import './index.css';

import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AuthContextProvider } from './context/AuthContext';


function App() {
  return (
    <main className='flex h-screen w-screen overflow-hidden'>
      
      <AuthContextProvider>
        <Routes>
          {/* Public Route if not authenticated send them to one of the outlet routes */}
          <Route element={<AuthLayout />}>
            <Route path='/sign-in' element={ <SignInForm /> } />
          </Route>

          {/* Private Route */}
          <Route element={<RootLayout />}>
            <Route index path='/' element={<DashBoard />}/>
          </Route>
          
        </Routes>

      </AuthContextProvider>
    </main>
  )
}
export default App
