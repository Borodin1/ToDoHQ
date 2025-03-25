//Core
import { Link } from "react-router-dom";
//Components
import { Button, Input } from "../../shared/components";

//Icons
import { FaUser } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import { useSignIn } from "./useSignIn";

export const SignInForm: React.FC = () => {
  const {  onSubmit, register, handleSubmit, errors } = useSignIn();
  return (
    <div className="flex justify-center flex-col">
      <h1 className="font-bold text-4xl mb-6 max-[400px]:text-2xl">Sign In</h1>
      <div className="flex justify-center flex-col w-auto max-[700px]:text-center">
        <form
          className="flex flex-col gap-6 max-[600px]:items-center"
          onSubmit={handleSubmit(onSubmit)}>
          <Input
            className="pl-8  h-[60px] rounded-[5px] border-1 max-[1450px]:w-[500px] max-[1150px]:w-[350px] max-[400px]:w-[250px]"
            icon={FaUser}
            {...register("identifier", { required: "Identifier is required." })}
            wrappedStyle="flex items-center"
            name="identifier"
            placeholder="Enter Username/Email"
            error={errors.identifier?.message}
          />

          <Input
            className="pl-8  h-[60px] rounded-[5px] border-1 max-[1450px]:w-[500px] max-[1150px]:w-[350px] max-[400px]:w-[250px]"
            icon={IoMdLock}
            {...register("password", { required: "Password is required." })}
            wrappedStyle="flex items-center"
            type="password"
            name="password"
            placeholder="Enter Password"
            error={errors.password?.message}
          />
          <Button title="Login" />
        </form>
        <p className="mt-16 max-[500px]:mt-4">
          Don't have an account?{" "}
          <Link to="/sign-up" className="text-[#008BD9]">
            Create One
          </Link>
        </p>
      </div>
    </div>
  );
};
