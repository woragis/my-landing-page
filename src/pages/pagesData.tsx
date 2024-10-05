import { PagesDataInterface } from "../types/pages.types";
import Home from "./Home";

export const pagesData: PagesDataInterface[] = [
  {
    name: "home",
    path: "/",
    element: <Home />,
  },
];
