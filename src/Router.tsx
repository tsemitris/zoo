import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layouts/Website/layout";
import { Home } from "./pages/home";
import { Animals } from "./pages/Animals/animals";
import { animalLoader } from "./loaders/animalLoader";
import { Animal } from "./pages/Animal/animal";
import { fedAnimalsStatusLoader } from "./loaders/fedAnimalsStatusLoader";
import { FedAnimals } from "./pages/FedAnimals/FedAnimals";
import { AnimalsLayout } from "./pages/Layouts/Animals/AnimalsLayout";
import { UnfedAnimals } from "./pages/UnfedAnimals/UnfedAnimals";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/animals",
        element: <AnimalsLayout></AnimalsLayout>,
        children: [
          {
            path: "",
            element: <Animals></Animals>,
          },
          {
            path: "fed",
            element: <FedAnimals></FedAnimals>,
            loader: () => fedAnimalsStatusLoader(true),
          },
          {
            path: "unfed",
            element: <UnfedAnimals></UnfedAnimals>,
            loader: () => fedAnimalsStatusLoader(false),
          },
        ],
      },
      {
        path: "/animal/:id",
        element: <Animal></Animal>,
        loader: animalLoader,
      },
    ],
  },
]);
