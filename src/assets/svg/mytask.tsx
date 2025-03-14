interface MyTaskProps {
  className: string;
}

export const MyTask: React.FC<MyTaskProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="26.000000"
      height="26.000000"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <clipPath id="clip25_161">
          <rect
            id="my task"
            rx="0.000000"
            width="25.000000"
            height="25.000000"
            transform="translate(0.500000 0.500000)"
            fill="currentColor"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <rect
        id="my task"
        rx="0.000000"
        width="25.000000"
        height="25.000000"
        transform="translate(0.500000 0.500000)"
        fill="currentColor"
        fillOpacity="0"
      />
      <g clipPath="url(#clip25_161)">
        <path
          id="Vector"
          d="M5.41 23.83L20.58 23.83C21.77 23.83 22.75 22.86 22.75 21.66L22.75 5.41C22.75 4.22 21.77 3.25 20.58 3.25L18.41 3.25C18.41 2.96 18.3 2.68 18.09 2.48C17.89 2.28 17.62 2.16 17.33 2.16L8.66 2.16C8.37 2.16 8.1 2.28 7.9 2.48C7.69 2.68 7.58 2.96 7.58 3.25L5.41 3.25C4.22 3.25 3.25 4.22 3.25 5.41L3.25 21.66C3.25 22.86 4.22 23.83 5.41 23.83ZM5.41 5.41L7.58 5.41L7.58 7.58L18.41 7.58L18.41 5.41L20.58 5.41L20.58 21.66L5.41 21.66L5.41 5.41Z"
          fill="currentColor"
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
        <path
          id="Vector"
          d="M11.91 14.71L9.97 12.77L8.44 14.3L11.91 17.78L17.55 12.14L16.02 10.6L11.91 14.71Z"
          fill="currentColor"
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};
