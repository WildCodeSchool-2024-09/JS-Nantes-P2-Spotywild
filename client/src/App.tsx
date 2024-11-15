import { Outlet } from "react-router-dom";
import "./Globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="fa-main">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
