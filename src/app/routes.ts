import { createBrowserRouter } from "react-router";
import { CVSite } from "./pages/CVSite";
import { GamingSite } from "./pages/GamingSite";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { CredentialsPage } from "./pages/CredentialsPage";
import { ExperiencePage } from "./pages/ExperiencePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: CVSite,
  },
  {
    path: "/gaming",
    Component: GamingSite,
  },
  {
    path: "/projects",
    Component: ProjectsPage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
  {
    path: "/contact",
    Component: ContactPage,
  },
  {
    path: "/experience",
    Component: ExperiencePage,
  },
  {
    path: "/credentials",
    Component: CredentialsPage,
  },
]);
