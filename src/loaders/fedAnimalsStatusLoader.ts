import { IAnimalExt } from "../models/IAnimalExt";
import { getAnimals } from "../services/animalsService";

export const fedAnimalsStatusLoader = async (
  isFedBoolean: Boolean
): Promise<IAnimalExt[] | null> => {
  const storedAnimals = sessionStorage.getItem("animals");

  if (!storedAnimals) {
    await getAnimals();
    return fedAnimalsStatusLoader(isFedBoolean);
  }

  const animals: IAnimalExt[] = JSON.parse(storedAnimals);
  const fedStatusAnimal = animals.filter((a) => a.isFed === isFedBoolean);

  return fedStatusAnimal.length > 0 ? fedStatusAnimal : null;
};
