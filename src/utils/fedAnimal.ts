import { getStoredAnimals } from "./getStoredAnimals";
import { timeNow } from "./timeNow";

export const fedAnimal = async (animalID: number) => {
  try {
    // Fetch stored animals
    const animals = await getStoredAnimals();

    // Check if data was successfully retrived
    if (!animals) {
      console.error("No animals data found.");
      return null;
    }

    // Find the animal by ID
    const animal = animals?.find((a) => a.id === animalID);

    if (!animal) {
      console.error("Animal not found.");
      return null;
    }

    // Set isFed to true
    animal.isFed = true;

    // Set current time to lastFed
    animal.lastFed = timeNow();

    // Save the updated animals data to sessionStorage
    sessionStorage.setItem("animals", JSON.stringify(animals));

    return animal.isFed;
  } catch (error) {
    console.error("Failed to update animal fed status: ", error);
    return null;
  }
};
