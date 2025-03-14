interface DashboardProps{
  className:string
}

export const Dashboard: React.FC<DashboardProps> = ({ className }) => {
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
        d="M14.44 8.66L14.44 0L26 0L26 8.66L14.44 8.66ZM0 14.44L0 0L11.55 0L11.55 14.44L0 14.44ZM14.44 26L14.44 11.55L26 11.55L26 26L14.44 26ZM0 26L0 17.33L11.55 17.33L11.55 26L0 26Z"
        fill="currentColor"
        fillOpacity="1.000000"
        fillRule="nonzero"
      />
    </svg>
  );
};
