import React from "react";

function IconDate(props) {
  return (
    <svg width="24" viewBox="0 0 24 22.54" {...props}>
      <defs>
        <style>{`.cls-1{fill:#f7f8f9;}.cls-2{fill:#828283;}`}</style>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <g id="Inactive_Calender" data-name="Inactive Calender">
            <rect width="24" height="20" y="2.54" className="cls-1" rx="2.55"></rect>
            <path
              d="M21.45 3.54A1.54 1.54 0 0123 5.09V20a1.55 1.55 0 01-1.55 1.55H2.55A1.55 1.55 0 011 20V5.09a1.54 1.54 0 011.55-1.55h18.9m0-1H2.55A2.55 2.55 0 000 5.09V20a2.55 2.55 0 002.55 2.55h18.9A2.55 2.55 0 0024 20V5.09a2.55 2.55 0 00-2.55-2.55z"
              className="cls-2"
            ></path>
            <path d="M5.39 0.5L5.39 5.02" className="cls-1"></path>
            <path d="M5.39 5.52a.5.5 0 01-.5-.5V.5a.5.5 0 011 0V5a.5.5 0 01-.5.52z" className="cls-2"></path>
            <path d="M18.31 0.5L18.31 5.02" className="cls-1"></path>
            <path
              d="M18.31 5.52a.5.5 0 01-.5-.5V.5a.5.5 0 01.5-.5.5.5 0 01.5.5V5a.5.5 0 01-.5.52z"
              className="cls-2"
            ></path>
            <circle cx="5.2" cy="12.34" r="2.83" className="cls-2"></circle>
            <path d="M0.54 7.55L22.98 7.55" className="cls-1"></path>
            <path d="M23 8.05H.54a.5.5 0 010-1H23a.5.5 0 010 1z" className="cls-2"></path>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default React.memo(IconDate);
