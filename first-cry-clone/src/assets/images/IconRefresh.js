import React from "react";

function IconRefresh({ width = "16", height = "16", color = "#2AC940", className = "" }) {
  return (
    <svg className={className} fill={color} width={width} height={height} viewBox="0 0 24 24">
      <path d="M9.504 5.468A6.95 6.95 0 0112 5c3.859 0 7 3.14 7 7 0 .88-.17 1.72-.468 2.496l1.514 1.514A8.933 8.933 0 0021 12c0-4.962-4.037-9-9-9-1.24 0-2.418.258-3.492.715l.996 1.753zm4.992 13.064A6.95 6.95 0 0112 19c-3.859 0-7-3.14-7-7 0-.88.17-1.72.468-2.496L3.954 7.99A8.933 8.933 0 003 12c0 4.962 4.037 9 9 9a8.907 8.907 0 003.586-.755l-1.09-1.713z"></path>
      <path d="M16 20l-4 4v-8zM8 4l4-4v8z"></path>
    </svg>
  );
}

export default IconRefresh;
