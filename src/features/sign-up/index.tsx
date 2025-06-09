//Core
import { Link } from "react-router-dom";

//Components
import { Input, Button } from "../../shared/components";

//hooks
import { useSignUp } from "./useSignUp";

//Icons
import { FaUserEdit } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { FaUnlockKeyhole } from "react-icons/fa6";


export const SignUpForm: React.FC = () => {
  const { onSubmit, register, handleSubmit, watch, errors } = useSignUp();
  return (
    <div className="flex flex-col justify-around w-auto h-auto">
      <h1 className="font-bold text-4xl">Sign Up</h1>
      <div className="flex flex-col gap-4 max-[850px]:items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3 max-[850px]:items-center">
          <Input
            {...register("firstName", { required: "First name is required" })}
            placeholder="Enter First Name"
            name='firstName'
            icon={FaUserEdit}
            error={errors.firstName?.message}
          />
          <Input
            {...register("lastName", { required: "Last name is required" })}
            placeholder="Enter Last Name"
            name='lastName'
            icon={FaUserEdit}
            error={errors.lastName?.message}
          />
          <Input
            {...register("username", { required: "Username is required" })}
            placeholder="Enter Username"
            name='username'
            icon={FaUser}
            error={errors.username?.message}
          />
          <Input
            {...register("email", { required: "Email is required" })}
            placeholder="Enter Email"
            name='email'
            icon={IoMdMail}
            error={errors.email?.message}
          />
          <Input
            {...register("password", { required: "Password is required" })}
            placeholder="Enter Password"
            type="password"
            name='password'
            icon={FaLock}
            error={errors.password?.message}
          />
          <Input
            {...register("confirmPassword", {
              required: "Confirm your password",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
            placeholder="Confirm Password"
            type="password"
            icon={FaUnlockKeyhole}
            error={errors.confirmPassword?.message}
          />
          <Button title="Register" type='submit' />
        </form>
        <p className="flex gap-2">
          Already have account?
          <Link to="/sign-in" className="text-[#008BD9]">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};
