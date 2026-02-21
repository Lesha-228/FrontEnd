import { Link, Outlet } from "react-router-dom";
import "./layout.css";

export default function Layout() {
  return (
    <>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/about">About</Link>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        Student Portal 2026
      </footer>
    </>
  );
}