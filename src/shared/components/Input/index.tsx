import { IconType } from "react-icons";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: IconType;
  type?: "text" | "password";
  className?: string;
  wrappedStyle?: string;
}

export const Input: React.FC<InputProps> = ({
  icon: Icon,
  type = "text",
  className,
  wrappedStyle,
  ...props
}) => {
  const inputElement = (
    <input
      className={
        className
          ? className
          : "pl-8  h-[60px] rounded-[5px] border-1 max-[1450px]:w-[500px] max-[1150px]:w-[350px] max-[400px]:w-[250px] max-[400px]:h-[25px]"
      }
      type={type}
      {...props}
    />
  );
  return Icon ? (
    <div className={wrappedStyle ? wrappedStyle : "flex items-center"}>
      {Icon && (
        <span className="absolute ml-2">
          <Icon size={20} />
        </span>
      )}
      {inputElement}
    </div>
  ) : (
    inputElement
  );
};
