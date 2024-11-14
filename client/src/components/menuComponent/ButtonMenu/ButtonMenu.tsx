import "./ButtonMenu.css";

interface buttonState {
  isHidden: boolean;
  buttonAnimating: boolean;
  menuState: () => void;
}

function ButtonMenu({ isHidden, buttonAnimating, menuState }: buttonState) {
  return (
    <>
      <button
        type="button"
        className={`button-title ${buttonAnimating ? (isHidden ? "button-collapsed" : "button-expanded") : ""}`}
        onClick={menuState}
      >
        {isHidden ? (
          <img
            src="images/Logo-footer-menu/Logo_voir_menu-compacter.png"
            alt="Afficher le menu"
            className="icon"
          />
        ) : (
          "User Name"
        )}
      </button>
    </>
  );
}

export default ButtonMenu;
