import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="bg-white dark:bg-amber-950">
      <h2>Welcome</h2>
      <p>This is a starter React app with routes, pages and components.</p>
      <p>
        Check the <Link to="/portfolio">portfolio</Link> or learn more{" "}
        <Link to="/about">about</Link> me.
      </p>
    </section>
  );
}
