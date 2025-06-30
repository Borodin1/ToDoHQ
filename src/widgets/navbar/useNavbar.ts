import { useLocation, useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { logout } from "../../entities/auth/model/authSlice";
import { toast } from "react-toastify";
import { useState } from 'react';

export const useNavbar = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.auth.user);

  const [isOpen,setIsOpen] = useState(false)
  const toggleMenu =()=>setIsOpen(!isOpen) 

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/sign-in");
    toast.done("You successful logout");
  };

  return {
    user,
    location,
    handleLogout,
    toggleMenu,isOpen
  };
};
