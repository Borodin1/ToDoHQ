import { useNavigate } from "react-router";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../../app/store";
import { fetchAuth } from "../../entities/auth/api";
import { IAuthenticate } from "../../entities/auth/model/types";
import { SignInFormData } from "./types";
import { toast } from "react-toastify";

export const useSignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<SignInFormData> = async (
    data: SignInFormData
  ) => {
    try {
      const authData: IAuthenticate = {
        type: "login",
        identifier: data.identifier,
        password: data.password,
      };
      const result = await dispatch(fetchAuth(authData));
      if (fetchAuth.fulfilled.match(result)) {
        toast.success("Welcome back! 🚀 You're now signed in.");
        navigate("/");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(`${error.message} 🚨`);
      } else {
        toast.error("An unknown error occurred 🚨");
      }
    }
  };
  return {
    onSubmit,
    register,
    handleSubmit,
    errors,
  };
};
