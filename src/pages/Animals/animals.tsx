import { useEffect, useState } from "react";
import { getAnimals } from "../../services/animalsService";
import { AnimalsPresentation } from "../../components/AnimalsPresentation";
import { IAnimalExt } from "../../models/IAnimalExt";
import { LoadingSpinner } from "../../components/LoadingSpinner/LoadingSpinner";

export const Animals = () => {
  window.scrollTo(0, 0);

  const [animals, setAnimals] = useState<IAnimalExt[]>(
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
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <AnimalsPresentation animals={animals}></AnimalsPresentation>
      )}
    </>
  );
};
