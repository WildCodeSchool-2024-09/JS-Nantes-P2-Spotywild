import "./MusicSections.css";

interface Artist {
  titreImgRock: string;

  id: number;
  name: string;
  country: string;
  imgSrc: string;
  description: string;
  albums: {
    albumName: string;
    albumImg: string;
    description: string;
    songs: string[];
  };
  slicedArray: string;
}

function MusicSections({ Artists }) {
  const slicedArray: Artist[] = Artists.sort(() => Math.random() - 0.5).slice(
    0,
    4,
  );

  return (
    <section className="music-section">
      {slicedArray.map((el) => {
        return (
          <figure className="imgS" key={el.id}>
            <img className="images" src={el.imgSrc} alt={el.name} />{" "}
            <figcaption>{el.name}</figcaption>
          </figure>
        );
      })}
    </section>
  );
}

export default MusicSections;
