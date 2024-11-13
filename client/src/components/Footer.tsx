import { Link } from "react-router-dom";
import "./Footer.css";
import LanguageChoice from "./Languagechoice";

function Footer() {
  return (
    <footer className="footer">
      <LanguageChoice />

      <div className="Mentions">
        <p>© 2024 Tous droits réservés, SpotyWild®</p>
        <p>
          <Link className="Politique" to="/Confidentialité">
            Politique de confidentialité
          </Link>
          <span className="barre">|</span>
          <Link className="Condition" to="/Conditions">
            Conditions générales
          </Link>
        </p>
      </div>

      {/* Section Réseaux Sociaux */}
      <div className="icone">
        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
          <img src="Icones/Twitter.png" alt="twitter" />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="Icones/Facebook.png" alt="Facebook" />
        </a>
        <a
          className="spoty"
          href="https://spotify.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="Icones/spotify.png" alt="Spotify" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <img src="Icones/Youtube.png" alt="YouTube" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="Icones/Instagram.png" alt="Instagram" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
