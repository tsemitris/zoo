import { IAnimalExt } from "../models/IAnimalExt";
import { getAnimals } from "../services/animalsService";

export const getStoredAnimals = async (): Promise<IAnimalExt[]> => {
  const storedAnimals = sessionStorage.getItem("animals");

  if (!storedAnimals) {
    await getAnimals();
    return getStoredAnimals();
  }

  const animals: IAnimalExt[] = JSON.parse(storedAnimals);

  return animals;
};
