import { createBrowserRouter } from "react-router";
import { CVSite } from "./pages/CVSite";
import { GamingSite } from "./pages/GamingSite";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: CVSite,
  },
  {
    path: "/gaming",
    Component: GamingSite,
  },
]);
