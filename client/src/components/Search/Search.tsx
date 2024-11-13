import "./Search.css";

const placeHoder = "Que voulez-vous écouter ?";

function Search() {
  return (
    <input className="header-input" type="text" placeholder={placeHoder} />
  );
}

export default Search;
