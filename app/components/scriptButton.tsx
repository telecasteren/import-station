"use client";
import React from "react";

const sharedStyles = `cursor-pointer transition-transform duration-300 ease-in-out
hover:scale-95 rounded-md border border-solid hover:border-transparent flex items-center
justify-center bg-foreground text-background gap-2 hover:bg-[#031D64] hover:text-white
dark:hover:bg-[#205a83] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto`;

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  text: string;
  dataScriptId?: number;
  className?: String;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  text,
  className,
  dataScriptId,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      data-script-id={dataScriptId}
      className={`${sharedStyles} ${className ? className : ""}`}
    >
      {text}
    </button>
  );
};

export default Button;
