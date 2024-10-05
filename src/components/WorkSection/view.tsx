import { WorkInfoDataInterface } from "../../types/workSection.type";
import { useWorkSectionModel } from "./model";

export const WorkSectionView = ({
  workInfoData,
}: ReturnType<typeof useWorkSectionModel>) => {
  const workSectionComponent = workInfoData.map(
    ({ image, title, text }: WorkInfoDataInterface) => {
      return (
        <article key={title} className="work-section-info">
          <div className="info-boxes-container">
            <img src={image} alt={title + " image"} />
          </div>
          <h2>{title}</h2>
          <p>{text}</p>
        </article>
      );
    }
  );
  return (
    <section className="work-section-wrapper" id="work">
      <header className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
          doloribus quasi est, libero soluta veniam.
        </p>
      </header>
      <footer className="work-section-bottom">{workSectionComponent}</footer>
    </section>
  );
};
