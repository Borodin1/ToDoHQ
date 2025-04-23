import { forwardRef } from "react";
import { IconType } from "react-icons";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: IconType;
  type?: "text" | "password" | "radio" | 'textarea';
  className?: string;
  wrappedStyle?: string;
  error?: string;
  label?: string;
  name?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      icon: Icon,
      type = "text",
      className,
      wrappedStyle,
      name,
      error,
      label,
      ...props
    },
    ref
  ) => {
    const inputElement = (
      <input
        ref={ref}
        className={
          className
            ? className
            : "pl-8  h-[60px] rounded-[5px] border-1 border-gray-400 max-[1450px]:w-[500px] max-[1150px]:w-[350px] max-[400px]:w-[250px] max-[400px]:h-[25px]"
        }
        type={type}
        {...props}
      />
    );
    if (type === "radio") {
      return (
        <div className="flex items-stretch gap-1.5">
          <label className={className} htmlFor={name}>
            <span className={wrappedStyle}>•</span> {label}
          </label>
          <input
            name={name}
            type={type}
            className="border-[#A1A3AB]"
          />
        </div>
      );
    }
    if(type === 'textarea'){
      return(
        <div className='flex flex-col text-left'>
        <label className='text-sm font-semibold mb-1'>{label}</label>
        <textarea className={className} placeholder='Start writing here ...'/>
        </div>
      )
    }
    return Icon ? (
      <div className="max-h-16">
        <div className={wrappedStyle ? wrappedStyle : "flex items-center"}>
          {Icon && (
            <span className="absolute ml-2">
              <Icon size={20} />
            </span>
          )}
          {inputElement}
        </div>
        {error && (
          <p className="text-red-500 text-sm min-h-[20px] mb-1.5 max-[500px]:mb-0">
            {error}
          </p>
        )}
      </div>
    ) : (
      <div className="flex flex-col text-left gap-2">
        <label className="text-sm font-semibold">{label}</label>
        {inputElement}
      </div>
    );
  }
);
