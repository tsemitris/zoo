import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layouts/Website/layout";
import { AnimalsLayout } from "./pages/Layouts/Animals/AnimalsLayout";
import { NotFound } from "./pages/NotFound/notFound";
import { Home } from "./pages/Home/home";
import { Animals } from "./pages/Animals/animals";
import { fedAnimalsStatusLoader } from "./loaders/fedAnimalsStatusLoader";
import { UnfedAnimals } from "./pages/UnfedAnimals/UnfedAnimals";
import { FedAnimals } from "./pages/FedAnimals/FedAnimals";
import { animalLoader } from "./loaders/animalLoader";
import { Animal } from "./pages/Animal/animal";
import { AboutUs } from "./pages/AboutUs/aboutUs";
import { FAQ } from "./pages/FAQ/FAQ";
import { ContactUs } from "./pages/ContactUs/contactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <NotFound></NotFound>,
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
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
]);
