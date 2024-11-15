import MusicData from "../assets/music-data.json";
import MusicSections from "../components/MusicSections/MusicSections";

function App() {
  return (
    <main>
      {MusicData.map((el) => {
        return (
          <MusicSections
            key={`${el.genre}-${el.Artistes[0].id}`} // Utiliser genre + id comme clé unique
            Artists={el.Artistes}
          />
        );
      })}
    </main>
  );
}

export default App;
