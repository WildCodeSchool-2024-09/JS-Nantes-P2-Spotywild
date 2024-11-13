import "./menu.css";
import Abonnement from "./AbonnementComponent/Abonnement";
import ButtonMenu from "./ButtonMenuComponnent/ButtonMenu";
import Favoris from "./FavoriteComponent/Favorite";
import PlayList from "./PlayListComponent/PlayList";

interface MenuProps {
  isHidden: boolean;
  menuState: () => void;
}

function Menu({ isHidden, menuState }: MenuProps) {
  return (
    <>
      <ButtonMenu isHidden={isHidden} menuState={menuState} />

      <aside className={`menu ${isHidden ? "menu-hidden" : "menu-visible"}`}>
        <h2>User Name</h2>
        <section className="interaction">
          <PlayList />
          <Favoris />
          <Abonnement />
        </section>
      </aside>
    </>
  );
}

export default Menu;
