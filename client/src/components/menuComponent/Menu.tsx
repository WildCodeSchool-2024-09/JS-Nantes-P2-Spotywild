import "./menu.css";
import Abonnement from "../AbonnementComponent/Abonnement";
import Favoris from "../FavorisComponent/Favoris";
import PlayList from "../PlayListComponent/PlayList";

function Menu() {
  return (
    <>
      <section className="menu">
        <h3>User Name</h3>
        <PlayList />
        <Favoris />
        <Abonnement />
      </section>
    </>
  );
}

export default Menu;
