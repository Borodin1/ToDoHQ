import React from "react";
import { Routes,Route } from 'react-router-dom';
import { AuthLayout } from '../widgets/auth-layout';
import { SignIn,SignUp } from '../pages';
import { Layout } from '../shared/components/layout';

export const App: React.FC = () => {
  return (
    <>
      <Routes>
        
        {/* Main */}
        <Route index element={<Layout/>}/>
    
        {/* Authentication */}
        <Route element={<AuthLayout/>}>
        <Route path='/sign-in'  element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        </Route>

      </Routes>
    </>
  );
};
