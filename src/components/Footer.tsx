export default function Footer() {
  return (
    <footer
      style={{
        padding: "1rem",
        borderTop: "1px solid #eaeaea",
        marginTop: "2rem",
      }}
    >
      <small>
        © {new Date().getFullYear()} MyPortfolio — built with Vite + React
      </small>
    </footer>
  );
}
