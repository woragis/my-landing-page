import { useLayoutModel } from "./model";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const LayoutView = ({}: ReturnType<typeof useLayoutModel>) => {
  return (
    <div className="App">
      <div className="home-container">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};
