"use client";

import React from "react";

type TooltipProps = {
  show: boolean;
  children: React.ReactNode;
};

const Tooltip: React.FC<TooltipProps> = ({ show, children }) => {
  if (!show) return null;

  return (
    <span className="absolute top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 text-sm text-white bg-gray-800 rounded shadow-lg z-50">
      {children}
    </span>
  );
};

export default Tooltip;
