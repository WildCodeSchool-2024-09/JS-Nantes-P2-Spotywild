import "./App.css";
import Artiste from "./components/1-carts/artiste";

const images = [
  "https://e-cdns-images.dzcdn.net/images/cover/41b8f3833e15ad11d55805556e8c7e00/500x500-000000-80-0-0.jpg",
  "https://www.booska-p.com/wp-content/uploads/2018/08/travis-scott-nous-souhaite-la-bienvenue-dans-astroworld-son-649.jpg",
  "https://m.media-amazon.com/images/I/51f3Aj7mEsL._SX300_SY300_QL70_FMwebp_.jpg",
  "https://e-cdns-images.dzcdn.net/images/cover/d9c957b88855e088940f96e955cf26be/500x500-000000-80-0-0.jpg",
];

const images1 = [
  "https://png.pngitem.com/pimgs/s/132-1320337_lil-wayne-4-world-best-rapper-hd-png.png",
  "https://img.lapresse.ca/924x615/201108/30/362779-lil-wayne-tha-carter-iv.jpg",
  "https://media.pitchfork.com/photos/5929bc47abf31b7dc7155c9b/1:1/w_320,c_limit/2a8b2311.jpg",
  "https://media.pitchfork.com/photos/629a176f8443feaafec76182/1:1/w_320,c_limit/Post-Malone-Stoney.jpg",
];

function App() {
  return (
    <div className="lescoompenson">
      <Artiste album={images} identifier="first" titre="titr-album" />
      <Artiste album={images1} identifier="second" titre="titr-album" />
    </div>
  );
}

export default App;
