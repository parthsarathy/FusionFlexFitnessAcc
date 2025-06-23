import React from "react";

// Simple dumbbell SVG icon sized for use above the 'i'
export default function DumbbellIcon({ size = 18 }) {
  return (
    <svg width={size} height={size/2} viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="3" width="14" height="3" rx="1.5" fill="#ff6600"/>
      <rect x="0" y="2" width="2" height="5" rx="1" fill="#222"/>
      <rect x="16" y="2" width="2" height="5" rx="1" fill="#222"/>
    </svg>
  );
}
