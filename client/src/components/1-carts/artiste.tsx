import "./artiste.css";
interface AlbumInterface {
  album: string[];
  identifier: string;
  titre: string;
}
export default function Artiste({ album, identifier }: AlbumInterface) {
  return (
    <>
      <div className={identifier}>
        {album.map((imageUrl, index) => (
          <div className="container" key={imageUrl}>
            <img
              className="imageTest"
              src={imageUrl}
              alt={`album-image-${index}`}
            />
            <h1 className="discrip">
              Artiste Name <br /> <span> description artist</span>
            </h1>
          </div>
        ))}
      </div>
    </>
  );
}
