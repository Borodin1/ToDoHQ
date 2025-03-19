import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { jwtDecode } from "jwt-decode";
import { logout } from "../../entities/auth/model/authSlice";
import { toast } from "react-toastify";
import { useEffect } from 'react';

interface ProtectedAuthProps {
  children: React.ReactNode;
}

export const ProtectedAuth: React.FC<ProtectedAuthProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const token = useAppSelector((state) => state.auth.token);

  useEffect(()=>{
    if (!token) {
        navigate("/sign-in");
        return ;
      }
      try {
        const decoded = jwtDecode(token);
        if (decoded.exp && decoded.exp * 1000 < Date.now()) {
          dispatch(logout());
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          navigate("/sign-in");
          return;
        }
      } catch (error) {
        toast.error(error instanceof Error ? error.message : String(error));
      }
  },[token,dispatch,navigate])

  return children;
};
