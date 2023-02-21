import React from "react";

function IconUser(props) {
  return (
    <svg width="24" viewBox="0 0 24 24.8" {...props}>
      <defs>
        <style>{`.cls-icon-user1{fill:none;}.cls-icon-user2{fill:#f7f8f9;}.cls-icon-user3{fill:#828283;}.cls-icon-user4{clip-path:url(#clip-path);}`}</style>
        <clipPath id="clip-path">
          <path d="M0 12A12 12 0 1012 0 12 12 0 000 12" className="cls-icon-user1"></path>
        </clipPath>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <g id="Inactive_User_-_40px" data-name="Inactive User - 40px">
            <path d="M12 23.7A11.7 11.7 0 1123.7 12 11.72 11.72 0 0112 23.7" className="cls-icon-user2"></path>
            <path
              d="M12 1A11 11 0 111 12 11 11 0 0112 1m0-1a12 12 0 1012 12A12 12 0 0012 0"
              className="cls-icon-user3"
            ></path>
            <g className="cls-icon-user4">
              <path
                d="M12 6a4.07 4.07 0 014.06 4c0 1.38-1.39 2.66-2.57 3.41l-1.1.71 1.28.31c4.32 1 8.09 4.77 8.33 9.16H2c.24-4.39 3.91-8.11 8.23-9.16l1.28-.31-1.1-.71c-1.18-.75-2.47-2-2.47-3.41A4.07 4.07 0 0112 6m0-1.2a4.92 4.92 0 00-2.66 9.07A11.25 11.25 0 00.74 24.8h22.52a11.25 11.25 0 00-8.6-10.93A4.92 4.92 0 0012 4.8"
                className="cls-icon-user3"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default React.memo(IconUser);
