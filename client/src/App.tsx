import { Outlet } from "react-router-dom";
import "./Globals.css";
import Header from "./components/Header/Header";
<<<<<<< HEAD
import Footer from "./components/Footer/Footer";
=======
import Footer from "./components/Footer";
>>>>>>> b57fb755ce59bcd0a3c3cd8f52ddff5c041a19ef

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
