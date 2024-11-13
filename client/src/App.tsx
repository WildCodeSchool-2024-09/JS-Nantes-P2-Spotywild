import "./Globals.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import Menu from "./components/menuComponent/Menu";
// import ButtonMenu from "./components/menuComponent/ButtonMenuComponnent/ButtonMenu";

function App() {
  const [isHidden, setIsHidden] = useState(false);

  const menuState = () => {
    setIsHidden((prevState) => !prevState);
  };

  return (
    <>
      <header>
        <Header />
      </header>

      <main className="leMain">
        <section className="columne2">
          <h2>Accueil</h2>
        </section>

        <Menu isHidden={isHidden} menuState={menuState} />
      </main>
    </>
  );
}

export default App;
