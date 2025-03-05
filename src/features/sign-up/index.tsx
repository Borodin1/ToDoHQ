//Core
import { Link } from "react-router-dom";

//Components
import { Input,Button } from "../../shared/components";

//Icons
import { FaUserEdit } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { FaUnlockKeyhole } from "react-icons/fa6";

export const SignUpForm: React.FC = () => {
  return (
    <div className="flex flex-col justify-around w-auto">
      <h1 className="font-bold text-4xl">Sign Up</h1>
      <div className="flex flex-col gap-4 max-[850px]:items-center">
        <div className="flex flex-col gap-3 max-[850px]:items-center">
          <Input
            name="firstName"
            placeholder="Enter First Name"
            icon={FaUserEdit}
          />

          <Input
            name="lastName"
            placeholder="Enter Last Name"
            icon={FaUserEdit}
          />

          <Input name="userName" placeholder="Enter Username" icon={FaUser} />

          <Input name="email" placeholder="Enter Email" icon={IoMdMail} />

          <Input
            name="password"
            placeholder="Enter Password"
            type="password"
            icon={FaLock}
            className="pl-8  h-[60px] rounded-[5px] border-1 max-[1450px]:w-[500px] max-[1150px]:w-[350px] max-[400px]:w-[250px]"
          />

          <Input
            name="confirmedPassword"
            placeholder="Confirm Password"
            type="password"
            icon={FaUnlockKeyhole}
            className="pl-8  h-[60px] rounded-[5px] border-1 max-[1450px]:w-[500px] max-[1150px]:w-[350px] max-[400px]:w-[250px]"
          />
          <Button title="Register" />
        </div>
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
