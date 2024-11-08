import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <nav className={styles.header_container}>
        <img
          src="../../../public/images/logo-spotywild.png"
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
    </>
  );
}

export default Header;
