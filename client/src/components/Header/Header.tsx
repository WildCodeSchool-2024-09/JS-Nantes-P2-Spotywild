import { NavLink } from "react-router-dom";
import "./Header.css";
import Search from "../Search/Search";

function Header() {
  return (
    <>
      <header>
        <nav className="header-container">
          <img
            src="/images/logo-spotywild.png"
            alt="Logo du site de SpotyWild"
          />
          <Search />
          <ul>
            <li>
              <NavLink to="/">Accueil</NavLink>
            </li>
            <li>
              <NavLink to="albums">Albums</NavLink>
            </li>
            <li>
              <NavLink to="titles">Titres</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
