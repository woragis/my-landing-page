import { useTestimonialSectionModel } from "./model";
import { TestimonialSectionView } from "./view";

const TestimonialSection = () => {
  const model = useTestimonialSectionModel();

  return <TestimonialSectionView {...model} />;
};

export default TestimonialSection;
