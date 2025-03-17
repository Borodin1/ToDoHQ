import { useNavigate } from 'react-router';
import { useAppDispatch } from '../../app/store';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SignUpFormData } from './types';
import { toast } from 'react-toastify';
import { fetchAuth } from '../../entities/auth/api';

export const useSignUp=()=>{
     const dispatch = useAppDispatch();
      const navigate = useNavigate();
      const {
        register,
        handleSubmit,
        setError,
        watch,
        formState: { errors },
      } = useForm<SignUpFormData>({
        mode:'onBlur'
      });
    
      
    
      const onSubmit:SubmitHandler<SignUpFormData> = async (data: SignUpFormData) => {
        if (data.password !== data.confirmPassword) {
          setError("confirmPassword", { message: "Passwords do not match" });
          toast.error("Password do not match!")
          return;
        }
        try {
          const result = await dispatch(fetchAuth({ type: "register", ...data }));
          if (fetchAuth.fulfilled.match(result)) {
            toast.success("Registration successful! 🎉");
            navigate("/");
          } else {
            setError("root", {
              type: "manual",
              message:
                (result.payload as { message?: string })?.message ??
                "Registration failed.",
            });
            toast.error('Registration failed.❌')
          }
        } catch {
          setError("root", {
            type: "manual",
            message: "An unexpected error occured.",
          });
          toast.error("An unexpected error occurred. 🚨");
        }
      };

      return{
        onSubmit,
        register,
        handleSubmit,
        watch,
        errors
      }
}