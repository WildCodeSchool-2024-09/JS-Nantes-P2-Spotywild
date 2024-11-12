import "./menu.css";
import { useState } from "react";
import Abonnement from "./AbonnementComponent/Abonnement";
import Favoris from "./FavorisComponent/Favoris";
import PlayList from "./PlayListComponent/PlayList";

function Menu() {
  const [isHidden, setIsHidden] = useState(false);

  const EtatMenu = () => {
    setIsHidden((prevState) => !prevState);
  };
  return (
    <>
      <button type="button" className="hideMenu" onClick={EtatMenu}>
        <img
          src={
            isHidden
              ? "images/Logo-footer-menu/Logo_voir_menu.png"
              : "images/Logo-footer-menu/Logo_cacher_menu.png"
          }
          alt={isHidden ? "Afficher le menu" : "Cacher le menu"}
        />
      </button>
      <aside className={`menu ${isHidden ? "menu-hidden" : "menu-visible"}`}>
        <h2>User Name</h2>
        <section className="intéraction">
          <PlayList />
          <Favoris />
          <Abonnement />
        </section>
      </aside>
    </>
  );
}

export default Menu;
