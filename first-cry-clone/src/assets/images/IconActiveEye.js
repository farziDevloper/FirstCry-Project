import React from "react";

function IconActiveEye(props) {
  return (
    <svg width="24" className="icon-active-eye" viewBox="0 0 24.8 14.63" {...props}>
      <defs>
        <style>{`.cls-1{fill:#828283;}`}</style>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <g id="Inactive_eye_open" data-name="Inactive eye open">
            <path
              d="M12.45 14.63a12.75 12.75 0 01-5.85-1.52l-.79-.43-.75-.47A21.71 21.71 0 010 7.65V7c.23-.28 5.78-7 12.44-7a11.25 11.25 0 013.94.75c.27.1.54.22.81.33l.69.33A23.31 23.31 0 0124.79 7v.61c-.21.32-5.31 7.02-12.34 7.02zM1.05 7.36a22.27 22.27 0 004.55 4c.23.15.47.29.72.43s.48.28.74.41a11.85 11.85 0 005.39 1.41c5.7 0 10.21-5 11.3-6.27a22.6 22.6 0 00-6.31-5.05L16.79 2c-.25-.11-.5-.22-.75-.31A10.23 10.23 0 0012.45 1C7 1 2.21 6.05 1.05 7.36z"
              className="cls-1"
            ></path>
            <circle cx="12.4" cy="7.31" r="3.79" className="cls-1"></circle>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default React.memo(IconActiveEye);
