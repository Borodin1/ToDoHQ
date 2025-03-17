import { forwardRef } from "react";
import { IconType } from "react-icons";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: IconType;
  type?: "text" | "password";
  className?: string;
  wrappedStyle?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { icon: Icon, type = "text", className, wrappedStyle, error, ...props },
    ref
  ) => {
    const inputElement = (
      <input
        ref={ref}
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
      <div className='max-h-16'>
        <div className={wrappedStyle ? wrappedStyle : "flex items-center"}>
          {Icon && (
            <span className="absolute ml-2">
              <Icon size={20} />
            </span>
          )}
          {inputElement}
        </div>
        {error && <p className="text-red-500 text-sm min-h-[20px] mb-1.5 max-[500px]:mb-0">{error}</p>}
      </div>
    ) : (
      inputElement
    );
  }
);
