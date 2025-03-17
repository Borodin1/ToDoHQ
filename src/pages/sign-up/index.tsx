import pic from "../../assets/images/sign-up.png";
import { SignUpForm } from '../../features/sign-up';


export const SignUp: React.FC = () => {
  
  return (
    <>
      <div className="flex items-center mr-24 max-[1150px]:mr-0">
        <img
          src={pic}
          alt="pictures"
          className="object-cover w-full h-[90%]  max-[850px]:hidden"
        />
      </div>

      <SignUpForm/>
    </>
  );
};
