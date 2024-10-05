import { useHomeModel } from "./model";
import AboutSection from "../../components/AboutSection";
import HeroSection from "../../components/HeroSection";
import WorkSection from "../../components/WorkSection";
import TestimonialSection from "../../components/TestimonialSection";
import ContactSection from "../../components/ContactSection";

export const HomeView = ({}: ReturnType<typeof useHomeModel>) => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <TestimonialSection />
      <ContactSection />
    </>
  );
};
