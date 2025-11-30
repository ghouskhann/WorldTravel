import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo lg-heading text-light">WorldTravel</h1>
        <ul className="nav-items">
          <li className="nav-item"><Link to="/">Home</Link></li>
          <li className="nav-item"><Link to="/about">About</Link></li>
          <li className="nav-item"><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
