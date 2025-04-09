import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthLayout } from "../widgets/auth-layout";
import { SignIn, SignUp, NotFoundPage, Dashboard } from "../pages";
import { Layout } from "../shared/components/layout";
import { ToastContainer } from "react-toastify";
import { ProtectedAuth } from "../features/protected-auth";
import { useAppSelector } from './store';

export const App: React.FC = () => {
//   const token = useAppSelector(state=>state.auth.token)
//   useEffect(() => {
//   if (!token) return; // Если токена нет, выходим

//   console.log("📡 Отправляем запрос с токеном:", token);

//   const fetchTodos = async () => {
//     try {
//       const response = await fetch("http://localhost:1337/api/todos", {
//         method: "GET",
//         headers: new Headers({
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         }),
//       });

//       console.log("🔍 Статус ответа:", response.status);

//       if (!response.ok) {
//         throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
//       }

//       const data = await response.json();
//       console.log("📌 Полученные тудушки:", data);
//     } catch (err) {
//       if (err instanceof Error) {
//         console.log(err.message);
//       } else {
//         console.log("An unknown error occurred");
//       }
//     }
//   };

//   fetchTodos();
// }, [token]);


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
