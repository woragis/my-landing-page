import { useWorkSectionModel } from "./model";
import { WorkSectionView } from "./view";

const WorkSection = () => {
  const model = useWorkSectionModel();

  return <WorkSectionView {...model} />;
};

export default WorkSection;
