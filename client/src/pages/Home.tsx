import data from "../assets/music-data.json";
import Artist from "../components/Artiste/Artist";
import "./Home.css";

function Home() {
  return (
    <section className="home-page">
      {data[0].Artistes.map((el) => {
        return <Artist key={el.id} imgSrc={el.imgSrc} name={el.name} />;
      })}
    </section>
  );
}

export default Home;
