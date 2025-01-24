import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../css/navi.css";

function Navi() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div onClick={toggleMenu} className="togglemenu">
        {isOpen ? (
          <FontAwesomeIcon icon={faTimes} size="2x" />
        ) : (
          <FontAwesomeIcon icon={faBars} size="2x" />
        )}
      </div>

      <div className={`navi mobile ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/about" onClick={toggleMenu}>
          About
        </Link>
        <Link to="/menu" onClick={toggleMenu}>
        Sweet Creations
        </Link>
        <Link to="/fq" onClick={toggleMenu}>
        Help & Info
        </Link>
      </div>

      <div className="navi desktop">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Sweet Creations</Link>
        <Link to="/fq">Help & Info</Link>
      </div>

      <a href="/">
        <img src="../images/LOGO.png" alt="logo" />
      </a>
      <Link to="/ordernow">
        <button>Order Now</button>
      </Link>
    </nav>
  );
}

export default Navi;
