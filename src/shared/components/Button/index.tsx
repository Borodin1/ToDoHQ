import React from 'react';
import { IconType } from "react-icons";

interface ButtonProps {
  className?: string;
  title: string | IconType;
}

export const Button: React.FC<ButtonProps> = ({ className, title }) => {
  console.log(typeof title === "string")
  return (
    <button
      className={
        className
          ? className
          : "w-[129px] h-[60px] bg-[#FF9090] rounded-[5px] text-white cursor-pointer"
      }>
      {typeof title === "string" ? title : React.createElement(title)}
    </button>
  );
};
