import { NavLink } from "react-router-dom";
import "./Breadcrumb.css";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({
  items,
}: BreadcrumbProps) {
  return (
    <section className="breadcrumb">
      <div className="container">
        <nav className="breadcrumb-nav">
          {items.map((item, index) => (
            <span key={index}>
              {item.href ? (
                <NavLink to={item.href}>
                  {item.label}
                </NavLink>
              ) : (
                <span>{item.label}</span>
              )}

              {index < items.length - 1 && (
                <span className="separator">
                  /
                </span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}