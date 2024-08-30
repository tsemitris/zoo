import { Link } from "react-router-dom";
import { handleImageNotFound } from "../utils/imageHandlers";
import { IAnimalExt } from "../models/IAnimalExt";
import { useEffect, useState } from "react";
import { timePassChecker } from "../utils/timePassChecker";

interface IAnimalsPresentationProps {
  animals: IAnimalExt[];
}

export const AnimalsPresentation = ({ animals }: IAnimalsPresentationProps) => {
  const [animalStates, setAnimalStates] = useState(() =>
    animals.map((animal) => ({
      id: animal.id,
      lastFed: animal.lastFed,
      isFed: animal.isFed,
    }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimalStates((prevStates) =>
        prevStates.map((animalState) => {
          if (timePassChecker(animalState.lastFed)) {
            // Update sessionStorage when time has passed
            const storedAnimals = JSON.parse(
              sessionStorage.getItem("animals") || "[]"
            );

            const updatedAnimals = storedAnimals.map(
              (storedAnimal: IAnimalExt) =>
                storedAnimal.id === animalState.id
                  ? { ...storedAnimal, isFed: false }
                  : storedAnimal
            );

            sessionStorage.setItem("animals", JSON.stringify(updatedAnimals));

            return { ...animalState, isFed: false };
          }
          return animalState;
        })
      );
    }, 1 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {animalStates.map((animalState) => {
        const animal = animals.find((a) => a.id === animalState.id);
        return (
          <div className="animal-card" key={animal?.id}>
            <div className="animal-profile">
              <img
                className="animal-image"
                src={animal?.imageUrl}
                alt={animal?.name}
                loading="lazy"
                onError={handleImageNotFound}
              />
              <p className="animal-name">{animal?.name}</p>
            </div>
            <p className="animal-short-desc">{animal?.shortDescription}</p>
            <div className="animal-button-options">
              <div className="animal-fed-status">
                {animalState.isFed ? (
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

              <Link to={`/animal/${animal?.id}`} className="global-btn">
                Läs mer
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};
