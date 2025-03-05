import React from "react";
import { Routes,Route } from 'react-router-dom';
import { AuthLayout } from '../widgets/auth-layout';
import { SignIn,SignUp } from '../pages';

export const App: React.FC = () => {
  return (
    <>
      <Routes>
        

        {/* Authentication */}
        <Route element={<AuthLayout/>}>
        <Route path='/sign-in'  element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        </Route>

      </Routes>
    </>
  );
};
