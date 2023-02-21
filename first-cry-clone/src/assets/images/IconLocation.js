import React from "react";

function IconLocation(props) {
  return (
    <svg width="15.39" viewBox="0 0 15.39 24" {...props}>
      <defs>
        <style>{`.cls-1{fill:#f7f8f9;}.cls-2{fill:#828283;}`}</style>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <g id="Inactive_MAP_-_24px" data-name="Inactive MAP - 24px">
            <path
              d="M7.69 23.5a.41.41 0 01-.36-.21C5.73 20.47.5 11 .5 7.69a7.2 7.2 0 0114.39 0c0 3.35-5.23 12.78-6.83 15.6a.41.41 0 01-.37.21"
              className="cls-1"
            ></path>
            <path
              d="M7.69 1a6.7 6.7 0 016.7 6.69c0 2.14-2.57 8-6.7 15.23C3.56 15.65 1 9.83 1 7.69A6.7 6.7 0 017.69 1m0-1A7.69 7.69 0 000 7.69c0 3.4 4.92 12.39 6.89 15.84a.9.9 0 00.8.47.88.88 0 00.8-.47c2-3.45 6.9-12.44 6.9-15.84A7.7 7.7 0 007.69 0"
              className="cls-2"
            ></path>
            <path d="M7.69 4.25a2.83 2.83 0 102.83 2.83 2.83 2.83 0 00-2.83-2.83" className="cls-2"></path>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default React.memo(IconLocation);
