import { Route, Routes } from "react-router-dom";
import { pagesData } from "./pagesData";
import { PagesDataInterface } from "../types/pages.types";
import Layout from "./Layout";

const Router = () => {
  const appRoutes = pagesData.map(
    ({ name, path, element }: PagesDataInterface) => {
      return <Route key={name} path={path} element={element} />;
    }
  );
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {appRoutes}
      </Route>
    </Routes>
  );
};

export default Router;
