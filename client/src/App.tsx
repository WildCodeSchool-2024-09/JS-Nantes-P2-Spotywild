import { Outlet } from "react-router-dom";
import "./Globals.css";
import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import ButtonMenu from "./components/menuComponent/ButtonMenu/ButtonMenu";
import Menu from "./components/menuComponent/Menu";

function App() {
  const [isHidden, setIsHidden] = useState(true);
  const [buttonAnimating, setButtonAnimating] = useState(false);

  const menuState = () => {
    // Inverser l'état du bouton immédiatement
    setIsHidden((prevState) => !prevState);

    setTimeout(() => {
      setButtonAnimating((prevState) => !prevState);
    }, 300);
  };

  return (
    <>
      <Header />
      <main className="the-main">
        <section className="column-2">
          <Outlet />
        </section>
        <section
          className={`column-1 ${isHidden ? "background-hidden" : "background-visible"}`}
        >
          <ButtonMenu
            buttonAnimating={buttonAnimating}
            isHidden={isHidden}
            menuState={menuState}
          />
          <Menu isHidden={isHidden} />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
