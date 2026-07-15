import "./Button.css";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  type?: "button" | "submit";
}

function Button({
  children,
  variant = "primary",
  size = "medium",
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn btn--${variant} btn--${size}`}
    >
      {children}
    </button>
  );
}

export default Button;