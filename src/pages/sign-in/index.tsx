import pic from "../../assets/images/login.png";
import { SignInForm } from "../../features/sign-in";

export const SignIn: React.FC = () => {
  return (
    <>
      <SignInForm />
      <div className="flex items-end">
        <img
          src={pic}
          alt="picture"
          className="w-[450px] h-[450px] max-[950px]:w-[250px] max-[700px]:hidden "
        />
      </div>
    </>
  );
};
