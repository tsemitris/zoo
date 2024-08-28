import { useEffect, useState } from "react";
import { getAnimals } from "../../services/animalsService";
import { AnimalsPresentation } from "../../components/AnimalsPresentation";
import { IAnimal } from "../../models/IAnimal";

export const Animals = () => {
  const [animals, setAnimals] = useState<IAnimal[]>(
    JSON.parse(sessionStorage.getItem("animals") || "[]")
  );
  const [fetching, setFetch] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setFetch(true);

      try {
        const result = await getAnimals();
        setAnimals(result);
      } catch (error) {
        console.error("Error fetching animals: ", error);
        setAnimals([]);
      } finally {
        setFetch(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {fetching ? (
        <h2>Loading...</h2>
      ) : (
        <AnimalsPresentation animals={animals}></AnimalsPresentation>
      )}
    </>
  );
};
