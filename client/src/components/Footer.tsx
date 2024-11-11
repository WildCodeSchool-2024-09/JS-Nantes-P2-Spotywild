import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        background: "#333",
        color: "#fff",
      }}
    >
      {/* Section Langues */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src=""
          alt="Changer de langue"
          style={{ width: "40px", cursor: "pointer", marginRight: "10px" }}
        />
      </div>

      {/* Section Informations et Liens */}
      <div style={{ textAlign: "center", flex: 1 }}>
        <p>© 2024 Tous droits réservés, SpotyWild®</p>
        <p>
          <Link
            to="/privacy-policy"
            style={{
              color: "#fff",
              textDecoration: "none",
              marginRight: "10px",
            }}
          >
            Politique de confidentialité
          </Link>
          |
          <Link
            to="/terms"
            style={{
              color: "#fff",
              textDecoration: "none",
              marginLeft: "10px",
            }}
          >
            Conditions générales
          </Link>
        </p>
      </div>

      {/* Section Réseaux Sociaux */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
          <img src="" alt="X" style={{ width: "30px", marginRight: "5px" }} />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src=""
            alt="Facebook"
            style={{ width: "30px", marginRight: "5px" }}
          />
        </a>
        <a href="https://spotify.com" target="_blank" rel="noopener noreferrer">
          <img
            src=""
            alt="Spotify"
            style={{ width: "30px", marginRight: "5px" }}
          />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <img
            src=""
            alt="YouTube"
            style={{ width: "30px", marginRight: "5px" }}
          />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="" alt="Instagram" style={{ width: "30px" }} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
