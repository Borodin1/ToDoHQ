import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthLayout } from "../widgets/auth-layout";
import { SignIn, SignUp, NotFoundPage, Dashboard } from "../pages";
import { Layout } from "../shared/components/layout";
import { ToastContainer } from "react-toastify";
import { ProtectedAuth } from "../features/protected-auth";

export const App: React.FC = () => {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        {/* Main */}
        <Route
          element={
            <ProtectedAuth>
              <Layout />
            </ProtectedAuth>
          }>
            {/* Dashboard */}
          <Route index element={<Dashboard/>}/>

          {/* Not found page */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        {/* Authentication */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  );
};
