import { useAboutSectionModel } from "./model";
import aboutBackground from "../../assets/images/about-background.png";
import aboutBackgroundImage from "../../assets/images/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

export const AboutSectionView = ({}: ReturnType<
  typeof useAboutSectionModel
>) => {
  return (
    <section className="about-section-container" id="about">
      <div className="about-background-image-container">
        <img src={aboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={aboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          voluptatem saepe soluta aliquid. Repellat perspiciatis obcaecati
          cumque rerum veritatis qui?
        </p>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi cumque
          rerum veritatis qui?
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </section>
  );
};
