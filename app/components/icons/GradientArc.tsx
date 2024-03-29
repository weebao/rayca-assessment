import React from "react";

export const GradientArc: React.FC<{ className: string }> = ({ className }) => {
  return (
    <svg
      width="91"
      height="50"
      viewBox="0 0 91 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M84.5 25.0178C76 13.0178 59 4.49991 41.5 7.49999C26 10.1572 8 22.5178 6 43.5179"
        stroke="url(#paint0_linear_181_16)"
        stroke-width="12"
        stroke-linecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_181_16"
          x1="6"
          y1="49"
          x2="87"
          y2="27"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#209996" />
          <stop offset="0.402809" stop-color="#A556F7" />
          <stop offset="1" stop-color="#E75780" />
        </linearGradient>
      </defs>
    </svg>
  );
};
