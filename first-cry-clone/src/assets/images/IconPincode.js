import React from "react";

function IconPincode(props) {
  return (
    <svg width="24" viewBox="0 0 24 17.57" {...props}>
      <defs>
        <style>{`.cls-1{fill:#f7f8f9;}.cls-2{fill:#828283;}`}</style>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <g id="Inactive_Pincode" data-name="Inactive Pincode">
            <rect width="24" height="17.57" className="cls-1" rx="2.55"></rect>
            <path
              d="M21.45 1A1.54 1.54 0 0123 2.55V15a1.55 1.55 0 01-1.55 1.55H2.55A1.55 1.55 0 011 15V2.55A1.54 1.54 0 012.55 1h18.9m0-1H2.55A2.55 2.55 0 000 2.55V15a2.55 2.55 0 002.55 2.55h18.9A2.55 2.55 0 0024 15V2.55A2.55 2.55 0 0021.45 0z"
              className="cls-2"
            ></path>
            <circle cx="6.09" cy="12.02" r="1.33" className="cls-2"></circle>
            <circle cx="9.82" cy="12.02" r="1.33" className="cls-2"></circle>
            <circle cx="13.56" cy="12.02" r="1.33" className="cls-2"></circle>
            <circle cx="17.29" cy="12.02" r="1.33" className="cls-2"></circle>
            <path d="M4.76 6.53L18.62 6.53" className="cls-1"></path>
            <path d="M18.62 7.53H4.76a1 1 0 010-2h13.86a1 1 0 010 2z" className="cls-2"></path>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default React.memo(IconPincode);
