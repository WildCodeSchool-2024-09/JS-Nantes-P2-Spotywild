import { Outlet } from "react-router-dom";
import "./Globals.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import Menu from "./components/menuComponent/Menu";

function App() {
  const [isHidden, setIsHidden] = useState(false);

  const menuState = () => {
    setIsHidden((prevState) => !prevState);
  };

  return (
    <>
      <Header />
      <main className="the-main">
        <section className="column-2">
          <Outlet />
        </section>
        <Menu isHidden={isHidden} menuState={menuState} />
      </main>
    </>
  );
}

export default App;
