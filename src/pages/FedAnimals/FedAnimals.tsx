import { useLoaderData } from "react-router-dom";
import { IAnimalExt } from "../../models/IAnimalExt";
import { AnimalsPresentation } from "../../components/AnimalsPresentation";

export const FedAnimals = () => {
  const fedAnimals = useLoaderData() as IAnimalExt[] | null;

  if (!fedAnimals) {
    return (
      <>
        <section className="message-contaienr">
          <img
            className="avatar"
            src="./images/sadAnimal.svg"
            alt="A sad dog with orange shirt and pants"
          />
          <p className="message">Inga matade djur hittades!</p>
        </section>
      </>
    );
  }

  return (
    <>{<AnimalsPresentation animals={fedAnimals}></AnimalsPresentation>}</>
  );
};
