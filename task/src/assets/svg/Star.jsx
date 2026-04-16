import * as React from "react";
const Star = (props) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.50037 11.8465L4.57049 13.3864C3.93918 13.7185 3.20168 13.1825 3.32199 12.4793L3.88143 9.2166L1.51099 6.90554C0.999932 6.40785 1.28199 5.5406 1.98749 5.43747L5.26349 4.96166L6.72843 1.99272C7.04406 1.35285 7.95587 1.35285 8.27149 1.99272L9.73643 4.96166L13.0125 5.43747C13.718 5.53985 14.0001 6.40704 13.4891 6.90554L11.1186 9.2166L11.6781 12.4793C11.7984 13.1825 11.0608 13.7185 10.4296 13.3864L7.50037 11.8465Z"
      fill="url(#paint0_linear_219_179)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_219_179"
        x1={7.5}
        y1={1.51254}
        x2={7.5}
        y2={13.4875}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFE61C" />
        <stop offset={1} stopColor="#FFA929" />
      </linearGradient>
    </defs>
  </svg>
);
export default Star;
