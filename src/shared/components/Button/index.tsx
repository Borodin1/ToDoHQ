import React from 'react';
import { IconType } from "react-icons";

interface ButtonProps {
  className?: string;
  title: string | IconType;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button: React.FC<ButtonProps> = ({ className, title, type = "button", onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={
        className
          ? className
          : "w-[129px] h-[60px] dark:bg-[#FF6A6A] bg-[#FF9090] rounded-[5px] text-white cursor-pointer pointer-events-auto transition-transform duration-700 ease-in-out hover:scale-110"
      }>
      {typeof title === "string" ? title : React.createElement(title)}
    </button>
  );
};
