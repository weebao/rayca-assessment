import React from "react";

export const Speedometer: React.FC = (props) => {
  return (
    <svg
      width="41"
      height="25"
      viewBox="0 0 41 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.49993 20.5C1.99996 9 14.5 -1 26.4999 4"
        stroke="url(#paint0_linear_179_13)"
        stroke-width="4"
        stroke-linecap="round"
      />
      <path
        d="M36 11.2374C38 13.2374 38.5001 16.7374 38.5002 20.2374"
        stroke="#2E2F38"
        stroke-width="4"
        stroke-linecap="round"
      />
      <path
        d="M17.315 22.2393C18.593 23.6885 20.71 23.9119 22.0407 22.7383C24.1836 20.8485 27 13 27 13C27 13 19.5536 15.5985 17.4107 17.4883C16.08 18.6619 16.037 20.7902 17.315 22.2393ZM21.065 18.9322C21.2482 19.1399 21.3644 19.3983 21.3989 19.6748C21.4335 19.9513 21.3848 20.2334 21.2591 20.4856C21.1334 20.7377 20.9363 20.9485 20.6928 21.0913C20.4492 21.234 20.1701 21.3024 19.8908 21.2877C19.6114 21.273 19.3444 21.1759 19.1234 21.0087C18.9024 20.8415 18.7375 20.6116 18.6493 20.3482C18.5612 20.0849 18.5539 19.7998 18.6284 19.529C18.7028 19.2582 18.8557 19.014 19.0676 18.8271C19.3519 18.5769 19.7219 18.4474 20.0964 18.4671C20.4708 18.4868 20.8192 18.6541 21.065 18.9322Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_179_13"
          x1="27"
          y1="3"
          x2="2.5"
          y2="22"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#A556F7" />
          <stop offset="1" stop-color="#209996" />
        </linearGradient>
      </defs>
    </svg>
  );
};
