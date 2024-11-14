import "./CategoryCard.css";

interface CardI {
  id: number;
  name: string;
  imgSrc: string;
}
interface CharacterI {
  character: CardI;
}

function CategoryCard({ character }: CharacterI) {
  return (
    <>
      <figure className="category-card">
        <img src="" alt="" />
        <figcaption>{character.name}</figcaption>
      </figure>
    </>
  );
}

export default CategoryCard;
