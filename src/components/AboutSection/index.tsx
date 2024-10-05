import { useAboutSectionModel } from "./model";
import { AboutSectionView } from "./view";

const AboutSection = () => {
  const model = useAboutSectionModel();

  return <AboutSectionView {...model} />;
};

export default AboutSection;
