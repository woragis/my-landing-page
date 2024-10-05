import { useLayoutModel } from "./model";
import { LayoutView } from "./view";

const Layout = () => {
  const model = useLayoutModel();

  return <LayoutView {...model} />;
};

export default Layout;
