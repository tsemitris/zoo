import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout/layout";
import { Home } from "./pages/home";
import { Animals } from "./pages/Animals/animals";
import { animalLoader } from "./loaders/animalLoader";
import { Animal } from "./pages/Animal/animal";

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
        element: <Animals></Animals>,
      },
      {
        path: "/animal/:id",
        element: <Animal></Animal>,
        loader: animalLoader,
      },
    ],
  },
]);
