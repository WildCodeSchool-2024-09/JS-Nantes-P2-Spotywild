import "./Artist.css";

interface AlbumsI {
  imgSrc?: string;
  name: string;
}

export default function Artist({ imgSrc, name }: AlbumsI) {
  return (
    <figure className="artist-card">
      <img src={imgSrc} alt={`Artist named ${name}`} />
      <figcaption>
        {name} <br />
        <span> Description artist</span>
      </figcaption>
    </figure>
  );
}

// <div className="artist-headband">
// {album.map((imageUrl: string, index: number) => (
//   <div className="container" key={imageUrl}>
//     <img
//       className="imageTest"
//       key={imageUrl}
//       src={imageUrl}
//       alt={`album-image-${index}`}
//     />
//     <h1 className="discrip">
//       Artiste Name <br /> <span> description artist</span>
//     </h1>
//   </div>
// ))}
// </div>
