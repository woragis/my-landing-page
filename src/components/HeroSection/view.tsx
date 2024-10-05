import { useHeroSectionModel } from "./model";
import bannerBackground from "../../assets/images/home-banner-background.png";
import bannerImage from "../../assets/images/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";

export const HeroSectionView = ({}: ReturnType<typeof useHeroSectionModel>) => {
  return (
    <section className="home-banner-container" id="home">
      <div className="home-bannerImage-container">
        <img src={bannerBackground} alt="home background" />
      </div>
      <section className="home-text-section">
        <h1 className="primary-heading">
          Your Favorite Food Delivered Hot & Fresh
        </h1>
        <p className="primary-text">
          Healthy switcher chefs do all the prep work, like peeding, chopping &
          marinating, so you can cook a fresh food.
        </p>
        <button className="secondary-button">
          Order Now <FiArrowRight />
        </button>
      </section>
      <div className="home-image-section">
        <img src={bannerImage} alt="home image" />
      </div>
    </section>
  );
};
