import AuthLayout from './_auth/AuthLayout';
import SignInForm from './_auth/forms/SignInForm';
import RootLayout from './_root/RootLayout';

import { DashBoard, Results } from './_root/pages';

import './index.css';

import { Routes, Route} from 'react-router-dom';


function App() {
  return (
    <main className='flex h-screen w-screen overflow-hidden'>
      
      
        <Routes>
          {/* Public Route if not authenticated send them to one of the outlet routes */}
          <Route element={<AuthLayout />}>
            <Route path='/sign-in' element={ <SignInForm /> } />
          </Route>

          {/* Private Route */}
          <Route element={<RootLayout />}>
            <Route path='/' element={<DashBoard />} />
            <Route path='/results' element={<Results />}/>
          </Route>
          
        </Routes>
    </main>
  )
}
export default App
