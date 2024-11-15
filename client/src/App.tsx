import { Outlet } from "react-router-dom";
import "./Globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <main className="fa-main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
