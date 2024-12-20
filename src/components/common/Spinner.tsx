import React from 'react';

const Spinner = ({ color }: { color?: string }) => {
  return (
    <div>
      <svg
        id="dots"
        width="26px"
        height="20px"
        viewBox="0 0 132 58"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <title>dots</title>
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="dots" fill={`${color || '#222222'}`}>
            <circle id="dot1" cx="25" cy="30" r="13">
              <animate
                attributeName="r"
                from="13"
                to="13"
                values="13;20;13"
                dur="1.2s"
                repeatCount="indefinite"
                begin="0s"
              />
            </circle>
            <circle id="dot2" cx="65" cy="30" r="13">
              <animate
                attributeName="r"
                from="13"
                to="13"
                values="13;20;13"
                dur="1.2s"
                repeatCount="indefinite"
                begin="0.4s"
              />
            </circle>
            <circle id="dot3" cx="105" cy="30" r="13">
              <animate
                attributeName="r"
                from="13"
                to="13"
                values="13;20;13"
                dur="1.2s"
                repeatCount="indefinite"
                begin="0.8s"
              />
            </circle>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Spinner;
