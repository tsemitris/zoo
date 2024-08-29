import { IAnimalExt } from "../models/IAnimalExt";
import { getAnimals } from "../services/animalsService";
import { IAnimalLoader } from "../models/IAnimalLoader";

export const animalLoader = async ({
  params,
}: IAnimalLoader): Promise<IAnimalExt | null> => {
  const storedAnimals = sessionStorage.getItem("animals");

  if (!storedAnimals) {
    await getAnimals();
    return animalLoader({ params });
  }

  const animals: IAnimalExt[] = JSON.parse(storedAnimals);
  const animalId = params.id ? parseInt(params.id, 10) : null;

  if (animalId === null || isNaN(animalId)) {
    console.error("Invalid animal ID.");
    return null;
  }

  const animal = animals.find((a) => a.id === animalId);

  return animal || null;
};
