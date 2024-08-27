import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/layout";
import { Home } from "./pages/home";
import { Animals } from "./pages/animals";

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
    ],
  },
]);
