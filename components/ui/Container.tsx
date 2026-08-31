import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  width?: "default" | "narrow"; // default 1200px, narrow 800px
};

export function Container({ children, width = "default" }: ContainerProps) {
  return (
    <div className={`ui-container ui-container--${width}`}>{children}</div>
  );
}
