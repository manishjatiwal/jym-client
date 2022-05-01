import React, { MouseEventHandler } from "react";

type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "outline";
  size?: "small" | "regular" | "large";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

const Button = ({
  children,
  type = "button",
  variant = "primary",
  size = "regular",
  handleClick,
  className = "",
}: ButtonProps) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size} ${className}`}
      type={type}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
