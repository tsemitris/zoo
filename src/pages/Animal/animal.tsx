import { Link, useLoaderData } from "react-router-dom";
import { IAnimalExt } from "../../models/IAnimalExt";
import { handleImageNotFound } from "../../utils/imageHandlers";
import { useEffect, useState } from "react";
import { fedAnimal } from "../../utils/fedAnimal";
import { timeNow } from "../../utils/timeNow";
import { formatDate } from "../../utils/formatDate";
import { timePassChecker } from "../../utils/timePassChecker";

export const Animal = () => {
  window.scrollTo(0, 0);

  const animal = useLoaderData() as IAnimalExt;

  const [lastFed, setLastFed] = useState(animal.lastFed);
  const [active, setActive] = useState(animal.isFed);

  useEffect(() => {
    const updateActiveState = async () => {
      if (timePassChecker(lastFed)) {
        setActive(false);

        const storedAnimals = JSON.parse(
          sessionStorage.getItem("animals") || "[]"
        );
        const updatedAnimals = storedAnimals.map((storedAnimal: IAnimalExt) =>
          storedAnimal.id === animal.id
            ? { ...storedAnimal, isFed: false }
            : storedAnimal
        );
        sessionStorage.setItem("animals", JSON.stringify(updatedAnimals));
      }
    };

    const interval = setInterval(updateActiveState, 1 * 1000);

    return () => clearInterval(interval);
  });

  const fedAnimalEvent = () => {
    fedAnimal(animal.id);
    setLastFed(timeNow());
    setActive(true);
  };

  return (
    <>
      <section className="animal-main">
        <p className="breadcrumb">
          <Link className="breadcrumb-item" to={"/animals"}>
            Djur
          </Link>
          <span className="breadcrumb-active">{` / ${animal.name}`}</span>
        </p>
        <p className="animal-name">{animal.name}</p>
        <p className="animal-latin-name">{animal.latinName}</p>
        <div className="animal-image-container">
          <img
            className="animal-image"
            src={animal.imageUrl}
            alt={animal.latinName}
            loading="lazy"
            onError={handleImageNotFound}
          />
        </div>
        <div className="animal-info-container">
          <div className="animal-info">
            <span className="info-title">Födelsår:</span> {animal.yearOfBirth}
          </div>
          <div className="animal-info">
            <span className="info-title">Mediciner:</span> {animal.medicine}
          </div>
        </div>
        <p>{animal.longDescription}</p>
        <div className="animal-fed-info">
          <div className="animal-last-fed-splitter">
            <p className="fed-title">Senast matad</p>
            <p className="fed-data">{formatDate(lastFed)}</p>
          </div>
          <div className="animal-last-fed-splitter fed-animal-btn-container">
            <button
              onClick={fedAnimalEvent}
              className={`global-btn ${active ? "global-btn-inactive" : ""}`}
            >
              Mata djur
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
