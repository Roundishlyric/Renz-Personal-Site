import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    lazy: async () => ({ Component: (await import("./pages/CVSite")).CVSite }),
  },
  {
    path: "/gaming",
    lazy: async () => ({ Component: (await import("./pages/GamingSite")).GamingSite }),
  },
  {
    path: "/projects",
    lazy: async () => ({ Component: (await import("./pages/ProjectsPage")).ProjectsPage }),
  },
  {
    path: "/about",
    lazy: async () => ({ Component: (await import("./pages/AboutPage")).AboutPage }),
  },
  {
    path: "/contact",
    lazy: async () => ({ Component: (await import("./pages/ContactPage")).ContactPage }),
  },
  {
    path: "/experience",
    lazy: async () => ({ Component: (await import("./pages/ExperiencePage")).ExperiencePage }),
  },
  {
    path: "/credentials",
    lazy: async () => ({ Component: (await import("./pages/CredentialsPage")).CredentialsPage }),
  },
  {
    path: "*",
    lazy: async () => ({ Component: (await import("./pages/NotFoundPage")).NotFoundPage }),
  },
]);
