import { useState } from "react";
import Logo from "../assets/logo.png";

function Header() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
    console.log("clicked", active);
  };

  return (
    <nav className="navbar">
      <a href="#" className="nav-logo">
        <img src={Logo} alt="" />.
      </a>
      <ul className={active ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Blog
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
      <div
        className={active ? "hamburger active" : "hamburger"}
        onClick={handleClick}
      >
        <span className={active ? "bar active" : "bar"}></span>
        <span className={active ? "bar active" : "bar"}></span>
        <span className={active ? "bar active" : "bar"}></span>
      </div>
    </nav>
  );
}

export default Header;
