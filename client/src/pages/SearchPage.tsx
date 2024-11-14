import "./SearchPage.css";
import CategoryCard from "../components/CategoryCard/CategoryCard";

const listTest = [
  {
    id: 1,
    name: "Coucou",
    imgSrc: "",
  },
  {
    id: 2,
    name: "Oucouc",
    imgSrc: "",
  },
  {
    id: 3,
    name: "Ocuocu",
    imgSrc: "",
  },
  {
    id: 4,
    name: "Ucouco",
    imgSrc: "",
  },
  {
    id: 5,
    name: "Coucou",
    imgSrc: "",
  },
  {
    id: 6,
    name: "Oucouc",
    imgSrc: "",
  },
  {
    id: 7,
    name: "Ocuocu",
    imgSrc: "",
  },
  {
    id: 8,
    name: "Ucouco",
    imgSrc: "",
  },
  {
    id: 9,
    name: "Ocuocu",
    imgSrc: "",
  },
  {
    id: 10,
    name: "Ucouco",
    imgSrc: "",
  },
];

function SearchPage() {
  return (
    <>
      <h1>Page de recherche</h1>
      <section className="catergory-container">
        {listTest.map((card) => {
          return <CategoryCard key={card.id} character={card} />;
        })}
      </section>
    </>
  );
}

export default SearchPage;
