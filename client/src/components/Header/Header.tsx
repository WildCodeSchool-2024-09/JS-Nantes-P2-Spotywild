import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <>
      <header>
        <nav className="header-container">
          <img
            src="/images/logo-spotywild.png"
            alt="Logo du site de SpotyWild"
          />
          <ul>
            <li>
              <Link to="/">Artistes</Link>
            </li>
            <li>
              <Link to="/">Albums</Link>
            </li>
            <li>
              <Link to="/">Titres</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
