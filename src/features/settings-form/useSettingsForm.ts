import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from "../../app/store";
import { fetchUpdateUser } from "../../entities/auth/api";
import { IAuthUpdate } from "../../entities/auth/model/types";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

export const useSettingsForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

 const {register,handleSubmit} = useForm<IAuthUpdate>()

 const onSubmit:SubmitHandler<IAuthUpdate> = async(data:IAuthUpdate) => {
 const filteredData = Object.fromEntries(
    Object.entries(data).filter(([value]) => value !== "")
  );
   const result = await dispatch(fetchUpdateUser(filteredData));
   if(fetchUpdateUser.fulfilled.match(result)){
    toast.success("Profile updated successfully! 🚀");
    navigate('/')
   }else{
    toast.error("Failed to update profile. Please try again. 🚨")
   }
 };

  return { register,onSubmit,handleSubmit };
};
