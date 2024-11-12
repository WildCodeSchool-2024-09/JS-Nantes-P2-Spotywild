import "./Globals.css";
import Header from "./components/Header/Header";
import Menu from "./components/menuComponent/Menu";

function App() {
  return (
    <>
      <Header />
      <h1>SpotyWild</h1>
      <main>
        <section className="test">
          <h2>Acceuil</h2>
        </section>
        <Menu />
      </main>
    </>
  );
}

export default App;
