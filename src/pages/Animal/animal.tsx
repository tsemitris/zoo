import { Link, useLoaderData } from "react-router-dom";
import { IAnimalExt } from "../../models/IAnimalExt";
import { handleImageNotFound } from "../../utils/imageHandlers";
import { formatDate } from "../../utils/formatDate";

export const Animal = () => {
  const animal = useLoaderData() as IAnimalExt;

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
            <p className="fed-data">{formatDate(animal.lastFed)}</p>
          </div>
          <div className="animal-last-fed-splitter fed-animal-btn-container">
            <button className="global-btn global-btn-inactive">
              Mata djur
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
