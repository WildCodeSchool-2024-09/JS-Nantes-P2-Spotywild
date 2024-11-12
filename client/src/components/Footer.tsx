import { Link } from "react-router-dom";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      {/* Section Langues */}
      <div>
        <img src="Icones/choix de langue.png" alt="Changer de langue" />
      </div>

      {/* Section Informations et Liens */}
      <div className="Mentions">
        <p>© 2024 Tous droits réservés, SpotyWild®</p>
        <p>
          <Link className="Politique" to="/Politique de confidentialité">
            Politique de confidentialité
          </Link>
          <span>|</span>
          <Link className="Condition" to="/Conditions générales">
            Conditions générales
          </Link>
        </p>
      </div>

      {/* Section Réseaux Sociaux */}
      <div className="icone">
        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
          <img src="Icones/txitter.png" alt="twitter" />
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
};

export default Footer;
