import type { ReactNode } from "react";
import "./Card.css";

interface CardProps {
  children: ReactNode;
}

export default function Card({ children }: CardProps) {
  return <div className="card">{children}</div>;
}