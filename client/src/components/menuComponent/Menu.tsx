import "./Menu.css";
import ButtonMenu from "./ButtonMenu/ButtonMenu";
import Favorite from "./Favorite/Favorite";
import PlayList from "./PlayList/PlayList";
import Subscribe from "./Subscribe/Subscribe";

interface MenuProps {
  isHidden: boolean;
  menuState: () => void;
}

function Menu({ isHidden, menuState }: MenuProps) {
  return (
    <>
      <ButtonMenu isHidden={isHidden} menuState={menuState} />

      <aside className={`menu ${isHidden ? "menu-hidden" : "menu-show"}`}>
        <h2>User Name</h2>
        <section className="interaction">
          <PlayList />
          <Favorite />
          <Subscribe />
        </section>
      </aside>
    </>
  );
}

export default Menu;
