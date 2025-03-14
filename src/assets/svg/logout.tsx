interface LogoutProps {
  className: string;
}

export const Logout: React.FC<LogoutProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="26.000000"
      height="26.000000"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs />
      <path
        id="Vector"
        d="M20.22 7.22L18.2 9.24L20.51 11.55L8.66 11.55L8.66 14.44L20.51 14.44L18.2 16.75L20.22 18.77L26 13L20.22 7.22ZM2.88 2.88L13 2.88L13 0L2.88 0C1.29 0 0 1.3 0 2.88L0 23.11C0 24.7 1.29 26 2.88 26L13 26L13 23.11L2.88 23.11L2.88 2.88Z"
        fill="currentColor"
        fillOpacity="1.000000"
        fillRule="nonzero"
      />
    </svg>
  );
};
