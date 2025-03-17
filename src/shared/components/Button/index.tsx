import React from 'react';
import { IconType } from "react-icons";

interface ButtonProps {
  className?: string;
  title: string | IconType;
}

export const Button: React.FC<ButtonProps> = ({ className, title }) => {
  return (
    <button
    type='submit'
      className={
        className
          ? className
          : "w-[129px] h-[60px] bg-[#FF9090] rounded-[5px] text-white cursor-pointer"
      }>
      {typeof title === "string" ? title : React.createElement(title)}
    </button>
  );
};
