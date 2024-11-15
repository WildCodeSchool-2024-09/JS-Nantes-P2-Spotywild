import "./ButtonMenu.css";

interface buttonState {
  isHidden: boolean;
  menuState: () => void;
}

function ButtonMenu({ isHidden, menuState }: buttonState) {
  return (
    <>
      <button type="button" className="hiddenMenu" onClick={menuState}>
        <img
          src={
            isHidden
              ? "images/Logo-footer-menu/Logo_voir_menu-compacter.png"
              : "images/Logo-footer-menu/Logo_cacher_menu-compacter.png"
          }
          alt={isHidden ? "Afficher le menu" : "Cacher le menu"}
        />
      </button>
    </>
  );
}

export default ButtonMenu;
