import { IAnimalExt } from "../models/IAnimalExt";
import { IAnimalLoader } from "../models/IAnimalLoader";
import { getStoredAnimals } from "../utils/getStoredAnimals";

export const animalLoader = async ({
  params,
}: IAnimalLoader): Promise<IAnimalExt | null> => {
  const animals = await getStoredAnimals();

  if (!animals) {
    console.error("No animals found.");
    return null;
  }

  const animalId = params.id ? parseInt(params.id, 10) : null;

  if (animalId === null || isNaN(animalId)) {
    console.error("Invalid animal ID.");
    return null;
  }

  const animal = animals.find((a) => a.id === animalId);

  return animal || null;
};
