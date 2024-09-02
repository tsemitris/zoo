import { IAnimal } from "../models/IAnimal";
import { get } from "./apiService";

const BASE_URL = "https://animals.azurewebsites.net/api/animals";

export const getAnimals = async () => {
  const storedAnimals = sessionStorage.getItem("animals");
  if (storedAnimals) return JSON.parse(storedAnimals);

  const result = await get<IAnimal[]>(`${BASE_URL}`);
  sessionStorage.setItem("animals", JSON.stringify(result));
  return result;
};
