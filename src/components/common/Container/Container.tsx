import type { ReactNode } from "react";
import "./Container.css";

type ContainerSize =
  | "sm"
  | "md"
  | "lg"
  | "xl";

interface ContainerProps {
  children: ReactNode;
  size?: ContainerSize;
  fluid?: boolean;
  className?: string;
}

export default function Container({
  children,
  size = "xl",
  fluid = false,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={[
        "container",
        `container--${size}`,
        fluid ? "container--fluid" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}