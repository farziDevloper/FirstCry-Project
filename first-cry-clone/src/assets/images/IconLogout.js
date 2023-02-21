import React from "react";

export default function IconLogout({ className = "", width = "18.03px", color = "#fff" }) {
  return (
    <svg className={className} width={width} viewBox="0 0 18.03 15.5">
      <g>
        <g>
          <line
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5px"
            x1="6.31"
            y1="7.66"
            x2="16"
            y2="7.66"
          />
          <polyline
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5px"
            points="12.46 2.84 17.28 7.66 12.46 12.48"
          />
          <path
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5px"
            d="M6.31.75H3.62A2.88,2.88,0,0,0,.75,3.62v8.26a2.88,2.88,0,0,0,2.87,2.87H6.31"
          />
        </g>
      </g>
    </svg>
  );
}
