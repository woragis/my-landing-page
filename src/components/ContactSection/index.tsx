import { useContactSectionModel } from "./model";
import { ContactSectionView } from "./view";

const ContactSection = () => {
  const model = useContactSectionModel();

  return <ContactSectionView {...model} />;
};

export default ContactSection;
