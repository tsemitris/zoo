import { Link } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";

interface IAnimalsPresentationProps {
  animals: IAnimal[];
}

export const AnimalsPresentation = ({ animals }: IAnimalsPresentationProps) => {
  const handleImageNotFound = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.src = "/image-not-found.jpg";
  };

  return (
    <>
      <section className="animals-container">
        {animals.map((animal) => (
          <div className="animal-card" key={animal.id}>
            <div className="animal-profile">
              <img
                className="animal-image"
                src={animal.imageUrl}
                alt={animal.name}
                loading="lazy"
                onError={handleImageNotFound}
              />
              <p className="animal-name">{animal.name}</p>
            </div>
            <p className="animal-short-desc">{animal.shortDescription}</p>
            <div className="animal-button-options">
              <Link to={`/animal/${animal.id}`} className="animal-read-more">
                Läs mer
              </Link>
              <div className="animal-fed-status">
                <span className="status-indicator"></span>
                Matad
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
