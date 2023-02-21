import React from "react";

function IconEmail(props) {
  return (
    <svg width="24" viewBox="0 0 24 17.57" {...props}>
      <defs>
        <style>{`.cls-1{fill:#f7f8f9;}.cls-2{fill:#828283;}`}</style>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <g id="Inactive_email" data-name="Inactive email">
            <rect width="24" height="17.57" className="cls-1" rx="2.55"></rect>
            <path
              d="M21.45 1A1.54 1.54 0 0123 2.55V15a1.55 1.55 0 01-1.55 1.55H2.55A1.55 1.55 0 011 15V2.55A1.54 1.54 0 012.55 1h18.9m0-1H2.55A2.55 2.55 0 000 2.55V15a2.55 2.55 0 002.55 2.55h18.9A2.55 2.55 0 0024 15V2.55A2.55 2.55 0 0021.45 0z"
              className="cls-2"
            ></path>
            <path
              d="M23.16 3.44l-9.78 5.14a3 3 0 01-2.76 0L.84 3.44A1.56 1.56 0 010 2.07V15a2.55 2.55 0 002.55 2.55h18.9A2.55 2.55 0 0024 15V2.07a1.56 1.56 0 01-.84 1.37z"
              className="cls-1"
            ></path>
            <path
              d="M23 4.65V15a1.55 1.55 0 01-1.55 1.55H2.55A1.55 1.55 0 011 15V4.65l9.15 4.81a4 4 0 003.7 0L23 4.65m1-2.58a1.56 1.56 0 01-.84 1.37l-9.78 5.14a3 3 0 01-2.76 0L.84 3.44A1.56 1.56 0 010 2.07V15a2.55 2.55 0 002.55 2.55h18.9A2.55 2.55 0 0024 15V2.07z"
              className="cls-2"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default React.memo(IconEmail);
