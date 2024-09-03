import { useLoaderData } from "react-router-dom";
import { IAnimalExt } from "../../models/IAnimalExt";
import { AnimalsPresentation } from "../../components/AnimalsPresentation";

export const UnfedAnimals = () => {
  const fedAnimals = useLoaderData() as IAnimalExt[] | null;

  if (!fedAnimals) {
    return (
      <>
        <section className="message-contaienr">
          <img
            className="avatar"
            src="./images/happyAnimal.svg"
            alt="A happy sloth with hands up"
          />
          <p className="message">Inga omatade djur hittades!</p>
        </section>
      </>
    );
  }

  return (
    <>{<AnimalsPresentation animals={fedAnimals}></AnimalsPresentation>}</>
  );
};
