interface ButtonProps {
  className?: string;
  title: string;
}

export const Button: React.FC<ButtonProps> = ({ className, title }) => {
  return <button className={className ? className : 'w-[129px] h-[60px] bg-[#FF9090] rounded-[5px] text-white cursor-pointer'}>{title}</button>;
};
