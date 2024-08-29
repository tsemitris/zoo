import { Link } from "react-router-dom";
import { handleImageNotFound } from "../utils/imageHandlers";
import { IAnimalExt } from "../models/IAnimalExt";

interface IAnimalsPresentationProps {
  animals: IAnimalExt[];
}

export const AnimalsPresentation = ({ animals }: IAnimalsPresentationProps) => {
  return (
    <>
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
            <div className="animal-fed-status">
              {animal.isFed ? (
                <>
                  <span className="status-indicator status-full"></span>
                  Matad
                </>
              ) : (
                <>
                  <span className="status-indicator status-hungry"></span>
                  Omatad
                </>
              )}
            </div>

            <Link to={`/animal/${animal.id}`} className="global-btn">
              Läs mer
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};
