import { Link, NavLink } from "react-router-dom";

const activeStyle = ({ isActive }: { isActive: boolean }) => ({
  fontWeight: isActive ? "700" : "400",
  textDecoration: "none",
  color: isActive ? "var(--color-main-blue)" : "inherit",
  marginRight: "1rem",
});

export default function Header() {
  return (
    <header style={{ padding: "1rem", borderBottom: "1px solid #eaeaea" }}>
      <nav>
        <Link to="/" style={{ marginRight: "1rem", fontWeight: 700 }}>
          MyPortfolio
        </Link>
        <NavLink to="/" style={activeStyle} end>
          Home
        </NavLink>
        <NavLink to="/about" style={activeStyle}>
          About
        </NavLink>
        <NavLink to="/portfolio" style={activeStyle}>
          Portfolio
        </NavLink>
      </nav>
    </header>
  );
}
